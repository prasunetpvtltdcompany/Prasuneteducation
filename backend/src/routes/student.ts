import { Router } from 'express';
import { supabase } from '../lib/supabase';

const router = Router();

router.post('/login', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required' });

  const { data: student, error } = await supabase.from('students').select('*').eq('roll_number', email).single();
  if (error || !student) return res.status(404).json({ error: 'Student not found' });

  const { data: teacherMap } = await supabase.from('teacher_student_map').select('teacher_id').eq('student_id', student.id);
  const teacherIds = teacherMap?.map((entry: any) => entry.teacher_id) || [];
  const { data: teachers } = await supabase.from('teachers').select('*').in('id', teacherIds);

  res.json({ student, teachers });
});

export default router;
