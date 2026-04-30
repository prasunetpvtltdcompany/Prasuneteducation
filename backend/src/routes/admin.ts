import { Router } from 'express';
import bcrypt from 'bcrypt';
import { supabase } from '../lib/supabase';

const router = Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  const { data: user, error } = await supabase
    .from('users')
    .select('id,full_name,email,password_hash,role')
    .eq('email', email)
    .single();

  if (error || !user) return res.status(401).json({ error: 'User not found' });
  if (!['admin', 'supervisor', 'owner'].includes(user.role)) {
    return res.status(403).json({ error: 'Unauthorized role' });
  }

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  const { data: organisations } = await supabase.from('organisations').select('*');
  res.json({ user: { id: user.id, full_name: user.full_name, role: user.role }, organisations });
});

router.post('/verify-org', async (req, res) => {
  const { organisation_id, status } = req.body;
  if (!organisation_id || !status) {
    return res.status(400).json({ error: 'organisation_id and status required' });
  }

  const { error } = await supabase.from('organisations').update({ status }).eq('id', organisation_id);
  if (error) return res.status(500).json({ error: error.message });
  return res.json({ message: 'Organisation status updated' });
});

export default router;
