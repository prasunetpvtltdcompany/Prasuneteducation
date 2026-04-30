# Prasunet Education Platform

Enterprise-grade school and college management platform scaffold built with React, Next.js, Node.js, Express, and Supabase.

## Architecture

- `web/` - Marketing site for prasunet.com
- `management/` - Management portal for schools and colleges
- `student/` - Student portal
- `staff/` - Staff / teacher portal
- `parents/` - Parent portal
- `admin/` - Admin portal for verification and master controls
- `backend/` - Node.js + Express API server with Supabase integration
- `supabase/` - Database schema and migration assets

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   npm install --prefix backend
   npm install --prefix web
   npm install --prefix management
   npm install --prefix student
   npm install --prefix staff
   npm install --prefix parents
   npm install --prefix admin
   ```

2. Create a Supabase project and set these environment variables in `backend/.env`:
   ```env
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_KEY=your-service-role-key
   JWT_SECRET=your-jwt-secret
   ```

3. Apply schema to Supabase:
   ```bash
   psql < supabase/schema.sql
   ```
   or use Supabase SQL editor.

4. Start the backend:
   ```bash
   npm run dev:backend
   ```

5. Start one frontend app per portal:
   ```bash
   npm run dev:web
   npm run dev:management
   npm run dev:student
   npm run dev:staff
   npm run dev:parents
   npm run dev:admin
   ```

6. Open the apps in your browser:
   - Marketing: `http://localhost:3000`
   - Management: `http://localhost:3001`
   - Student: `http://localhost:3002`
   - Staff: `http://localhost:3003`
   - Parents: `http://localhost:3004`
   - Admin: `http://localhost:3005`

## Deployment

- Frontends: Deploy each Next.js app to Vercel, Netlify, or AWS Amplify.
- Backend: Deploy to AWS EC2, Render, Railway, or Heroku.
- Database: Supabase or AWS RDS.
- File storage / media: AWS S3.

## Next Steps

- Add authentication and session support for each portal.
- Extend Supabase tables for timetable, fees, attendance, reports, and notifications.
- Add role-based access control for Owner, Admin, Supervisor, Accountant, Librarian, and more.
