-- ==============================================================================
-- GOREFLEXA – EARLY ACCESS REGISTRATIONS DATABASE SCHEMA
-- Target Database: Supabase PostgreSQL
-- ==============================================================================

-- 1. Enable UUID generation extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Create the early_access_registrations table
CREATE TABLE IF NOT EXISTS public.early_access_registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL CHECK (char_length(trim(full_name)) >= 2),
    email TEXT NOT NULL UNIQUE CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    mobile_number TEXT,
    country TEXT NOT NULL,
    interests TEXT[] DEFAULT '{}',
    privacy_consent BOOLEAN NOT NULL DEFAULT FALSE,
    marketing_consent BOOLEAN NOT NULL DEFAULT FALSE,
    registration_source TEXT NOT NULL DEFAULT 'marketing_website',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 3. Create performance and query indexes
CREATE INDEX IF NOT EXISTS idx_early_access_email ON public.early_access_registrations (email);
CREATE INDEX IF NOT EXISTS idx_early_access_created_at ON public.early_access_registrations (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_early_access_country ON public.early_access_registrations (country);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.early_access_registrations ENABLE ROW LEVEL SECURITY;

-- 5. Strict Founder-Only Security Policies:
-- Drop existing policies if re-running
DROP POLICY IF EXISTS "Service Role can manage all registrations" ON public.early_access_registrations;
DROP POLICY IF EXISTS "Public anonymous insert" ON public.early_access_registrations;
DROP POLICY IF EXISTS "Public cannot read registrations" ON public.early_access_registrations;
DROP POLICY IF EXISTS "Service role full access" ON public.early_access_registrations;
DROP POLICY IF EXISTS "Public cannot access registrations" ON public.early_access_registrations;

-- Revoke all direct permissions from anon and standard authenticated web users
REVOKE ALL ON TABLE public.early_access_registrations FROM anon;
REVOKE ALL ON TABLE public.early_access_registrations FROM authenticated;

-- Allow ONLY the secure backend service_role full management access.
-- The Next.js API server endpoint (/api/early-access) runs server-side with SUPABASE_SERVICE_ROLE_KEY.
CREATE POLICY "Service role full access" 
ON public.early_access_registrations
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Explicitly deny SELECT, INSERT, UPDATE, DELETE for public/anon
-- Public visitors CANNOT read registrations. Public APIs NEVER expose registrant data.
CREATE POLICY "Public cannot access registrations" 
ON public.early_access_registrations 
FOR ALL 
TO anon 
USING (false)
WITH CHECK (false);

-- 6. Table and Column comments for clear founder & developer documentation
COMMENT ON TABLE public.early_access_registrations IS 'Pre-launch waitlist registrations for GoReflexa official marketing website.';
COMMENT ON COLUMN public.early_access_registrations.id IS 'Unique UUID primary key for each early-access registrant.';
COMMENT ON COLUMN public.early_access_registrations.full_name IS 'Full legal or preferred name of the user.';
COMMENT ON COLUMN public.early_access_registrations.email IS 'Primary contact email, unique identifier (prevents duplicate registrations).';
COMMENT ON COLUMN public.early_access_registrations.mobile_number IS 'Optional mobile telephone number for launch reminders.';
COMMENT ON COLUMN public.early_access_registrations.country IS 'Country of residence.';
COMMENT ON COLUMN public.early_access_registrations.interests IS 'Array of selected platform features user is most interested in.';
COMMENT ON COLUMN public.early_access_registrations.privacy_consent IS 'Explicit acknowledgment and acceptance of the privacy policy.';
COMMENT ON COLUMN public.early_access_registrations.marketing_consent IS 'Optional opt-in for launch updates and product announcements.';
COMMENT ON COLUMN public.early_access_registrations.registration_source IS 'Source attribution (defaults to marketing_website).';
COMMENT ON COLUMN public.early_access_registrations.created_at IS 'UTC timestamp when registration was saved.';
