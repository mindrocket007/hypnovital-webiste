-- ============================================================
-- hypnovital Academy – Supabase Schema
-- ============================================================

-- Companies that buy courses
CREATE TABLE IF NOT EXISTS academy_companies (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT NOT NULL,
  contact_name TEXT,
  contact_email TEXT,
  course_slug TEXT NOT NULL,
  max_participants INTEGER NOT NULL DEFAULT 100,
  hr_report_with_names BOOLEAN DEFAULT true,
  hr_report_token TEXT UNIQUE DEFAULT gen_random_uuid()::text,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Individual participants
CREATE TABLE IF NOT EXISTS academy_participants (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  company_id TEXT NOT NULL REFERENCES academy_companies(id),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  access_token TEXT UNIQUE DEFAULT gen_random_uuid()::text,
  invited_at TIMESTAMPTZ DEFAULT now(),
  first_access_at TIMESTAMPTZ,
  UNIQUE(company_id, email)
);

-- Lesson progress tracking
CREATE TABLE IF NOT EXISTS academy_progress (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  participant_id TEXT NOT NULL REFERENCES academy_participants(id),
  course_slug TEXT NOT NULL,
  lesson_slug TEXT NOT NULL,
  started_at TIMESTAMPTZ DEFAULT now(),
  completed_at TIMESTAMPTZ,
  quiz_score INTEGER,
  quiz_total INTEGER,
  UNIQUE(participant_id, course_slug, lesson_slug)
);
