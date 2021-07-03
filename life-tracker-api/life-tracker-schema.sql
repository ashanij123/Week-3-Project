CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  username    TEXT NOT NULL,
  password    TEXT NOT NULL,
  email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TABLE exercise (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  category    TEXT NOT NULL DEFAULT 'misc',
  intensity   INTEGER NOT NULL,
  duration    INTEGER NOT NULL,
  created_at  TIMESTAMP DEFAULT NOW(),
  user_id  INTEGER REFERENCES users(id) ON DELETE CASCADE
);
-- CREATE TABLE activity (
--   id  SERIAL PRIMARY KEY,
--   activity_type VARCHAR(50) NOT NULL,
--   exercise_id INTEGER REFERENCES exercise(id) ON DELETE CASCADE,
--   created_at TIMESTAMP DEFAULT NOW()
-- );
