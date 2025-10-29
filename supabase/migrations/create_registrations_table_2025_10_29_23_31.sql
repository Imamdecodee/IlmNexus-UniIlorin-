-- Create registrations table for Ilm Nexus Conference
CREATE TABLE IF NOT EXISTS public.registrations_2025_10_29_23_31 (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_number TEXT,
    university_organization TEXT NOT NULL,
    student_id TEXT,
    area_of_interest TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_registrations_email_2025_10_29_23_31 ON public.registrations_2025_10_29_23_31(email);

-- Enable RLS
ALTER TABLE public.registrations_2025_10_29_23_31 ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert registrations (public registration)
CREATE POLICY "Allow public registration" ON public.registrations_2025_10_29_23_31
    FOR INSERT WITH CHECK (true);

-- Create policy to allow authenticated users to view all registrations (for admin purposes)
CREATE POLICY "Allow authenticated users to view registrations" ON public.registrations_2025_10_29_23_31
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_registrations_updated_at_2025_10_29_23_31
    BEFORE UPDATE ON public.registrations_2025_10_29_23_31
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();