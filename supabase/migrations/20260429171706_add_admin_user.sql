-- Insert admin user
INSERT INTO users (id, full_name, email, password_hash, role, organisation_id, created_at)
VALUES (
  gen_random_uuid(),
  'Admin User',
  'prajapatpramod474@gmail.com',
  '$2b$10$la43ZZ/NouN1DZJ0idIEuexWGXYVzxTU6PegeRBY7dVM4hfuwGXaG',
  'admin',
  NULL,
  NOW()
);