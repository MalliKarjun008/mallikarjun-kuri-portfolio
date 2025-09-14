import { ExternalLink, Github, Database, Brain, Globe, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { portfolioAPI } from '@/lib/supabase';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "Tourism Management System",
      description: "Built a scalable backend tourism management system with secure RESTful APIs and comprehensive CRUD operations for managing tourist destinations, bookings, and user data.",
      technologies: ["NodeJS", "Express", "MongoDB", "REST APIs"],
      github: "https://github.com/MalliKarjun008/Tourism",
      features: [
        "Secure RESTful API development",
        "Complete CRUD operations",
        "Scalable backend architecture",
        "Database optimization"
      ],
      icon: <Globe className="text-primary" size={32} />,
      color: "primary"
    },
    {
      title: "Alzheimer's Disease Detection",
      description: "Developed a comprehensive web platform for early detection of Alzheimer's disease using Convolutional Neural Networks on MRI data with TensorFlow/Keras integration.",
      technologies: ["MERN Stack", "TensorFlow", "Deep Learning", "Medical Imaging"],
      github: "https://github.com/MalliKarjun008/image_analysis/tree/main/medical-imaging-analysis",
      features: [
        "CNN-based disease detection",
        "Secure patient data storage",
        "Medical report generation",
        "Prediction visualization dashboard"
      ],
      icon: <Brain className="text-secondary" size={32} />,
      color: "secondary"
    }
  ]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await portfolioAPI.getProjects();
        const formattedProjects = data.map((project: any, index: number) => ({
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          github: project.github_url,
          features: [
            "Modern architecture",
            "Scalable design", 
            "Best practices",
            "Production ready"
          ],
          icon: index % 2 === 0 ? <Globe className="text-primary" size={32} /> : <Brain className="text-secondary" size={32} />,
          color: index % 2 === 0 ? "primary" : "secondary"
        }));
        setProjects(formattedProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Keep default values on error
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section-container bg-surface/50">
      <div className="text-center mb-16">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Showcasing innovative solutions built with modern technologies and best practices
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="card-portfolio fade-in-up group"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 bg-gradient-to-br from-surface to-surface-light rounded-xl shadow-card`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2 bg-surface border border-border rounded-lg 
                    hover:border-${project.color}/50 hover:bg-${project.color}/10
                    transition-all duration-300 group/btn
                  `}
                >
                  <Github size={18} className="group-hover/btn:text-primary transition-colors" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2 bg-surface border border-border rounded-lg 
                    hover:border-${project.color}/50 hover:bg-${project.color}/10
                    transition-all duration-300 group/btn
                  `}
                >
                  <ExternalLink size={18} className="group-hover/btn:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Project Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Shield size={16} className={`text-${project.color}`} />
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className={`w-1.5 h-1.5 bg-${project.color} rounded-full`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`
                    px-3 py-1 text-xs font-medium rounded-full
                    bg-gradient-to-r from-surface to-surface-light
                    border border-border text-${project.color}
                    hover:border-${project.color}/50 transition-colors
                  `}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="card-portfolio inline-block fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/MalliKarjun008"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-outline inline-flex items-center gap-2"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;