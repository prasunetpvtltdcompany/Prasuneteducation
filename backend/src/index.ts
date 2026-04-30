import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import managementRoutes from './routes/management';
import studentRoutes from './routes/student';
import staffRoutes from './routes/staff';
import parentsRoutes from './routes/parents';
import adminRoutes from './routes/admin';

dotenv.config();

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'http://localhost:3003',
    'http://localhost:3004',
    'http://localhost:3005'
  ],
  credentials: true
}));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', version: '1.0.0' });
});

app.use('/api/management', managementRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/parents', parentsRoutes);
app.use('/api/admin', adminRoutes);

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
