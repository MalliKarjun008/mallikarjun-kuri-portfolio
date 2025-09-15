-- Enable Row Level Security on all tables
ALTER TABLE public.personal_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.about_me ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.education ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.extracurricular ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access (since this is a portfolio website)
-- Personal info - public read
CREATE POLICY "Allow public read access" ON public.personal_info FOR SELECT USING (true);

-- About me - public read
CREATE POLICY "Allow public read access" ON public.about_me FOR SELECT USING (true);

-- Education - public read
CREATE POLICY "Allow public read access" ON public.education FOR SELECT USING (true);

-- Skills - public read
CREATE POLICY "Allow public read access" ON public.skills FOR SELECT USING (true);

-- Projects - public read
CREATE POLICY "Allow public read access" ON public.projects FOR SELECT USING (true);

-- Certifications - public read
CREATE POLICY "Allow public read access" ON public.certifications FOR SELECT USING (true);

-- Extracurricular - public read
CREATE POLICY "Allow public read access" ON public.extracurricular FOR SELECT USING (true);

-- Contact messages - allow insert only (for contact form submissions)
CREATE POLICY "Allow insert contact messages" ON public.contact_messages FOR INSERT WITH CHECK (true);