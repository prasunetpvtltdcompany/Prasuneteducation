-- Supabase schema for Prasunet education platform

create table organisations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  address text,
  phone text,
  email text unique not null,
  status text default 'pending',
  created_at timestamptz default now()
);

create table users (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid references organisations(id) on delete cascade,
  full_name text not null,
  email text not null unique,
  password_hash text not null,
  role text not null,
  status text default 'active',
  created_at timestamptz default now()
);

create table students (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid references organisations(id) on delete cascade,
  roll_number text not null,
  full_name text not null,
  student_class text,
  section text,
  phone text,
  parent_email text,
  parent_phone text,
  status text default 'active',
  created_at timestamptz default now()
);

create table teachers (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid references organisations(id) on delete cascade,
  teacher_code text not null,
  full_name text not null,
  subject text,
  phone text,
  status text default 'active',
  created_at timestamptz default now()
);

create table parents (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid references organisations(id) on delete cascade,
  student_id uuid references students(id) on delete cascade,
  full_name text not null,
  email text not null unique,
  phone text,
  status text default 'active',
  created_at timestamptz default now()
);

create table teacher_student_map (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid references teachers(id) on delete cascade,
  student_id uuid references students(id) on delete cascade,
  created_at timestamptz default now()
);

create table verification_requests (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid references organisations(id) on delete cascade,
  requested_by uuid references users(id) on delete set null,
  status text default 'pending',
  notes text,
  created_at timestamptz default now()
);
