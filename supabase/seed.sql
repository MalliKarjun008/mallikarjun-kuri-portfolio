-- Insert portfolio data

-- Personal information
INSERT INTO personal_info (name, location, phone, email, linkedin, github) VALUES 
('Mallikarjun Kuri', 'Bangalore, Karnataka', '+91-7483989991', 'mallikarjunkuri334@gmail.com', 'https://www.linkedin.com/in/mallikarjun-kuri-505211207/', 'https://github.com/MalliKarjun008');

-- About me
INSERT INTO about_me (bio) VALUES 
('Final-year Computer Science Engineering student at BMS College of Engineering with strong problem-solving skills and passion for fullstack development, AI/ML, and scalable systems.');

-- Education data
INSERT INTO education (institution, degree, duration, score, score_type, order_index) VALUES
('BMS College of Engineering', 'B.E. in Computer Science and Engineering', '2022–2026', '8.93', 'CGPA', 1),
('Konnur PU College', 'Pre University', '2021–2022', '95.16', 'Percentage', 2),
('JSS Rampur', 'High School', '2019–2020', '98.72', 'Percentage', 3);

-- Skills data
INSERT INTO skills (category, skill_name) VALUES
('Languages', 'Python'),
('Languages', 'Java'),
('Languages', 'C'),
('Languages', 'C++'),
('Languages', 'JavaScript'),
('Languages', 'SQL'),
('Languages', 'NoSQL'),
('Tools', 'VS Code'),
('Tools', 'IntelliJ IDEA Ultimate'),
('Frameworks/Technologies', 'Git'),
('Frameworks/Technologies', 'GitHub'),
('Frameworks/Technologies', 'ReactJS'),
('Frameworks/Technologies', 'NodeJS'),
('Frameworks/Technologies', 'ExpressJS'),
('Frameworks/Technologies', 'MongoDB'),
('Frameworks/Technologies', 'Postman');

-- Projects data
INSERT INTO projects (title, description, technologies, github_url, order_index) VALUES
('Tourism', 'Built a scalable backend tourism management system with secure RESTful APIs and CRUD operations.', '["Node.js", "Express", "MongoDB"]', 'https://github.com/MalliKarjun008/Tourism', 1),
('Alzheimer''s Disease Detection', 'Developed a web platform for early detection of Alzheimer''s disease using CNNs on MRI data with TensorFlow/Keras. Features: Secure data storage, patient reports, prediction visualization.', '["MERN", "Deep Learning", "TensorFlow", "Keras"]', 'https://github.com/MalliKarjun008/image_analysis/tree/main/medical-imaging-analysis', 2);

-- Certifications data
INSERT INTO certifications (title, provider, order_index) VALUES
('Fullstack Web Development', 'Udemy', 1),
('Supervised Machine Learning', 'Coursera', 2),
('Backend Development using Node.js', 'Udemy', 3);

-- Extracurricular data
INSERT INTO extracurricular (category, description) VALUES
('Volunteering', 'Teaching underprivileged children, awareness drives'),
('Sports & Fitness', 'Actively engaged in sports, promoting teamwork and discipline');