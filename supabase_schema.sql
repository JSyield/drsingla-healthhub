
-- This file is for documentation purposes only
-- It shows the SQL schema for the Supabase database

-- Properties table
CREATE TABLE public.properties (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price TEXT NOT NULL,
  price_unit TEXT,
  location TEXT NOT NULL,
  bedrooms INTEGER,
  bathrooms INTEGER,
  area TEXT,
  image TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT false,
  type TEXT NOT NULL CHECK (type IN ('sale', 'rent')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Contact form submissions table
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Set up Row Level Security policies
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for properties table
CREATE POLICY "Allow anonymous read access to properties" 
ON public.properties FOR SELECT USING (true);

CREATE POLICY "Allow authenticated users to insert properties" 
ON public.properties FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to update their properties" 
ON public.properties FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to delete their properties" 
ON public.properties FOR DELETE USING (auth.role() = 'authenticated');

-- Create policies for contact_submissions table
CREATE POLICY "Allow anonymous to submit contact forms" 
ON public.contact_submissions FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read contact submissions" 
ON public.contact_submissions FOR SELECT USING (auth.role() = 'authenticated');
