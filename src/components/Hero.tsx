import { Download, Mail, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { portfolioAPI } from '@/lib/supabase';

const Hero = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Mallikarjun Kuri',
    location: 'Bangalore, Karnataka',
    phone: '+91-7483989991',
    email: 'mallikarjunkuri334@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mallikarjun-kuri-505211207/',
    github: 'https://github.com/MalliKarjun008'
  });

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        const data = await portfolioAPI.getPersonalInfo();
        setPersonalInfo(data);
      } catch (error) {
        console.error('Error fetching personal info:', error);
        // Keep default values on error
      }
    };

    fetchPersonalInfo();
  }, []);
  const handleDownloadResume = () => {
    // This would typically download a PDF file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would put the actual resume PDF here
    link.download = 'Mallikarjun_Kuri_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-light"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Computer Science Engineering Student passionate about
            <br />
            <span className="text-primary font-semibold">Fullstack Development</span> • 
            <span className="text-secondary font-semibold"> AI/ML</span> • 
            <span className="text-accent font-semibold"> Scalable Systems</span>
          </p>
        </div>

        <div className="fade-in-up mb-12" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-primary" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-secondary" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-foreground transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="text-accent">{personalInfo.phone}</div>
          </div>
        </div>

        <div className="fade-in-up mb-12" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownloadResume}
              className="btn-hero-primary inline-flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </button>
            <a
              href="#contact"
              className="btn-hero-outline inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex justify-center gap-6">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <Linkedin size={20} className="text-primary" />
              <span className="text-sm">LinkedIn</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <Github size={20} className="text-secondary" />
              <span className="text-sm">GitHub</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;