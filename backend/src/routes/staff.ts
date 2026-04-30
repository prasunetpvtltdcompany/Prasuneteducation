import { Router } from 'express';
import bcrypt from 'bcrypt';
import { supabase } from '../lib/supabase';

const router = Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  const { data: user, error } = await supabase
    .from('users')
    .select('id,full_name,email,password_hash,role,organisation_id')
    .eq('email', email)
    .single();

  if (error || !user) return res.status(401).json({ error: 'User not found' });
  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  res.json({ user: { id: user.id, full_name: user.full_name, email: user.email, role: user.role } });
});

export default router;
