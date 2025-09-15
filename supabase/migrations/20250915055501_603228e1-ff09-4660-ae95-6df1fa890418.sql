-- Create personal_info table
CREATE TABLE public.personal_info (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  location TEXT,
  linkedin_url TEXT,
  github_url TEXT,
  resume_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create about_me table
CREATE TABLE public.about_me (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create education table
CREATE TABLE public.education (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  institution TEXT NOT NULL,
  degree TEXT NOT NULL,
  field_of_study TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  grade TEXT,
  description TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create skills table
CREATE TABLE public.skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL,
  skill_name TEXT NOT NULL,
  proficiency_level INTEGER CHECK (proficiency_level >= 1 AND proficiency_level <= 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create projects table
CREATE TABLE public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  technologies TEXT[] NOT NULL,
  github_url TEXT,
  live_url TEXT,
  image_url TEXT,
  start_date DATE,
  end_date DATE,
  featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create certifications table
CREATE TABLE public.certifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  issuing_organization TEXT NOT NULL,
  issue_date DATE NOT NULL,
  expiration_date DATE,
  credential_id TEXT,
  credential_url TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create extracurricular table
CREATE TABLE public.extracurricular (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date_range TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_messages table
CREATE TABLE public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data
INSERT INTO public.personal_info (name, title, email, phone, location, linkedin_url, github_url) VALUES
('Mallikarjun Kuri', 'Computer Science Student & Developer', 'mallikarjun.kuri@example.com', '+91 9876543210', 'Bangalore, India', 'https://linkedin.com/in/mallikarjun-kuri', 'https://github.com/mallikarjun-kuri');

INSERT INTO public.about_me (description) VALUES
('I am a final-year Computer Science Engineering student at BMS College of Engineering with a passion for fullstack development, AI/ML, and building scalable systems. I love creating innovative solutions and am always eager to learn new technologies.');

INSERT INTO public.education (institution, degree, field_of_study, start_date, end_date, grade, description, order_index) VALUES
('BMS College of Engineering', 'Bachelor of Engineering', 'Computer Science Engineering', '2021-08-01', '2025-06-01', '8.5 CGPA', 'Relevant coursework: Data Structures, Algorithms, Database Management Systems, Software Engineering, Machine Learning', 1),
('PU College', 'Pre-University Course', 'Science (PCMB)', '2019-06-01', '2021-05-01', '92%', 'Physics, Chemistry, Mathematics, Biology with Computer Science', 2);

INSERT INTO public.skills (category, skill_name, proficiency_level) VALUES
('Programming Languages', 'JavaScript', 4),
('Programming Languages', 'Python', 4),
('Programming Languages', 'Java', 3),
('Programming Languages', 'C++', 3),
('Frontend', 'React', 4),
('Frontend', 'HTML/CSS', 5),
('Frontend', 'Tailwind CSS', 4),
('Backend', 'Node.js', 4),
('Backend', 'Express.js', 4),
('Backend', 'Django', 3),
('Database', 'MySQL', 4),
('Database', 'PostgreSQL', 3),
('Database', 'MongoDB', 3),
('Tools & Technologies', 'Git', 4),
('Tools & Technologies', 'Docker', 3),
('Tools & Technologies', 'AWS', 2);

INSERT INTO public.projects (title, description, technologies, github_url, featured, order_index) VALUES
('E-Commerce Platform', 'A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration', ARRAY['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'], 'https://github.com/mallikarjun-kuri/ecommerce-platform', true, 1),
('Task Management App', 'A collaborative task management application with real-time updates and team collaboration features', ARRAY['React', 'Firebase', 'Material-UI'], 'https://github.com/mallikarjun-kuri/task-manager', true, 2),
('Weather Dashboard', 'A responsive weather dashboard that displays current weather and forecasts using external APIs', ARRAY['JavaScript', 'HTML', 'CSS', 'OpenWeather API'], 'https://github.com/mallikarjun-kuri/weather-dashboard', false, 3);

INSERT INTO public.certifications (name, issuing_organization, issue_date, credential_id, order_index) VALUES
('AWS Certified Cloud Practitioner', 'Amazon Web Services', '2024-03-15', 'AWS-CCP-2024-001', 1),
('Google Analytics Certified', 'Google', '2024-01-20', 'GA-CERT-2024-001', 2),
('React Developer Certification', 'Meta', '2023-11-10', 'META-REACT-2023-001', 3);

INSERT INTO public.extracurricular (category, title, description, date_range) VALUES
('Leadership', 'Technical Team Lead - College Fest', 'Led a team of 15 students to organize technical events during the annual college festival, managing logistics and coordinating with sponsors', '2023-2024'),
('Volunteer Work', 'Coding Instructor - NGO', 'Taught basic programming concepts to underprivileged children at local NGO on weekends', '2022-2024'),
('Sports', 'College Cricket Team', 'Member of the college cricket team, participated in inter-college tournaments', '2021-2023');