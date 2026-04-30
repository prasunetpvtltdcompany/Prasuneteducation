import { Router } from 'express';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../lib/supabase';
import multer from 'multer';
import csv from 'csv-parser';
import { Readable } from 'stream';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/register', async (req, res) => {
  const { name, address, phone, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'name, email, and password are required' });
  }

  const orgId = uuidv4();
  const passwordHash = await bcrypt.hash(password, 10);

  const { data: orgData, error: orgError } = await supabase
    .from('organisations')
    .insert([{ id: orgId, name, address, phone, email }]);

  if (orgError) {
    return res.status(500).json({ error: orgError.message });
  }

  const { error: userError } = await supabase.from('users').insert([{ 
    organisation_id: orgId,
    full_name: name,
    email,
    password_hash: passwordHash,
    role: 'owner'
  }]);

  if (userError) {
    return res.status(500).json({ error: userError.message });
  }

  return res.status(201).json({ orgId, message: 'Organisation registered' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  const { data: users, error } = await supabase
    .from('users')
    .select('id,full_name,email,password_hash,role,organisation_id')
    .eq('email', email)
    .single();

  if (error || !users) {
    return res.status(401).json({ error: 'User not found' });
  }

  const valid = await bcrypt.compare(password, users.password_hash);
  if (!valid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  let organisation = null;
  if (users.organisation_id) {
    const { data: orgData } = await supabase.from('organisations').select('*').eq('id', users.organisation_id).single();
    organisation = orgData;
  } else if (users.role === 'admin') {
    // Admin has no organisation
    organisation = { id: null, name: 'Admin Portal', address: '', phone: '', email: '', status: 'active', created_at: new Date().toISOString() };
  }

  res.json({ user: { id: users.id, full_name: users.full_name, email: users.email, role: users.role }, organisation });
});

router.post('/students', async (req, res) => {
  const { organisation_id, full_name, roll_number, student_class, section, phone, parent_email, parent_phone } = req.body;
  if (!organisation_id || !full_name || !roll_number) {
    return res.status(400).json({ error: 'Required fields missing' });
  }

  const { error } = await supabase.from('students').insert([{ 
    organisation_id,
    full_name,
    roll_number,
    student_class,
    section,
    phone,
    parent_email,
    parent_phone
  }]);

  if (error) return res.status(500).json({ error: error.message });
  return res.status(201).json({ message: 'Student created' });
});

router.post('/teachers', async (req, res) => {
  const { organisation_id, full_name, teacher_code, subject, phone } = req.body;
  if (!organisation_id || !full_name || !teacher_code) {
    return res.status(400).json({ error: 'Required fields missing' });
  }

  const { error } = await supabase.from('teachers').insert([{ organisation_id, full_name, teacher_code, subject, phone }]);
  if (error) return res.status(500).json({ error: error.message });
  return res.status(201).json({ message: 'Teacher created' });
});

router.post('/map', async (req, res) => {
  const { teacher_id, student_id } = req.body;
  if (!teacher_id || !student_id) {
    return res.status(400).json({ error: 'teacher_id and student_id are required' });
  }

  const { error } = await supabase.from('teacher_student_map').insert([{ teacher_id, student_id }]);
  if (error) return res.status(500).json({ error: error.message });

  return res.status(201).json({ message: 'Teacher mapped to student' });
});

router.get('/:orgId/roster', async (req, res) => {
  const { orgId } = req.params;
  const { data: students } = await supabase.from('students').select('*').eq('organisation_id', orgId);
  const { data: teachers } = await supabase.from('teachers').select('*').eq('organisation_id', orgId);
  return res.json({ students, teachers });
});

router.post('/upload-students', upload.single('file'), async (req, res) => {
  const { organisationId } = req.body;
  if (!req.file || !organisationId) {
    return res.status(400).json({ error: 'File and organisationId required' });
  }

  const results: any[] = [];
  const stream = Readable.from(req.file.buffer.toString());
  stream.pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      try {
        const students = results.map(row => ({
          organisation_id: organisationId,
          roll_number: row.roll_number,
          full_name: row.full_name,
          student_class: row.student_class,
          section: row.section,
          phone: row.phone,
          parent_email: row.parent_email,
          parent_phone: row.parent_phone
        }));

        const { data, error } = await supabase.from('students').insert(students).select();
        if (error) return res.status(500).json({ error: error.message });
        return res.status(201).json({ message: `${students.length} students uploaded`, students: data });
      } catch (err) {
        return res.status(500).json({ error: 'Error processing CSV' });
      }
    });
});

router.post('/generate-student-credentials', async (req, res) => {
  const { organisationId } = req.body;
  if (!organisationId) return res.status(400).json({ error: 'organisationId required' });

  const { data: students } = await supabase.from('students').select('*').eq('organisation_id', organisationId).eq('status', 'active');
  if (!students) return res.status(404).json({ error: 'No students found' });

  const credentials = [];
  for (const student of students) {
    const password = Math.random().toString(36).slice(-8);
    const passwordHash = await bcrypt.hash(password, 10);
    const email = `${student.roll_number}@student.local`; // Placeholder email

    const { error } = await supabase.from('users').insert([{
      organisation_id: organisationId,
      full_name: student.full_name,
      email,
      password_hash: passwordHash,
      role: 'student'
    }]);

    if (!error) {
      credentials.push({ roll_number: student.roll_number, email, password });
    }
  }

  return res.json({ credentials });
});

// Admin routes
router.get('/admin/organisations', async (req, res) => {
  const { data: organisations, error } = await supabase.from('organisations').select('*');
  if (error) return res.status(500).json({ error: error.message });
  return res.json(organisations);
});

router.get('/admin/verification-requests', async (req, res) => {
  const { data: requests, error } = await supabase.from('verification_requests').select('*');
  if (error) return res.status(500).json({ error: error.message });
  return res.json(requests);
});

router.post('/admin/approve-organisation', async (req, res) => {
  const { organisationId } = req.body;
  if (!organisationId) return res.status(400).json({ error: 'organisationId required' });

  const { error } = await supabase.from('organisations').update({ status: 'active' }).eq('id', organisationId);
  if (error) return res.status(500).json({ error: error.message });
  return res.json({ message: 'Organisation approved' });
});

router.post('/admin/reject-organisation', async (req, res) => {
  const { organisationId } = req.body;
  if (!organisationId) return res.status(400).json({ error: 'organisationId required' });

  const { error } = await supabase.from('organisations').update({ status: 'rejected' }).eq('id', organisationId);
  if (error) return res.status(500).json({ error: error.message });
  return res.json({ message: 'Organisation rejected' });
});

export default router;
