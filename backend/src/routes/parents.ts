import { Router } from 'express';
import { supabase } from '../lib/supabase';

const router = Router();

router.post('/login', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required' });

  const { data: parent, error } = await supabase.from('parents').select('*').eq('email', email).single();
  if (error || !parent) return res.status(404).json({ error: 'Parent not found' });

  const { data: student } = await supabase.from('students').select('*').eq('id', parent.student_id).single();

  res.json({ parent, student });
});

export default router;
