# Supabase Setup

This directory contains the core database schema for the Prasunet education platform.

## Initialize Supabase

1. Create a new Supabase project.
2. Copy `supabase/schema.sql` into the Supabase SQL editor and run it.
3. Set your service role key in `backend/.env`.

## Required tables

- `organisations`
- `users`
- `students`
- `teachers`
- `parents`
- `teacher_student_map`
- `verification_requests`

## Notes

- Use the Supabase SQL editor or `psql` to apply the schema.
- Add indexes and row-level security policies later for production.
