import { Award, ExternalLink, BookOpen, Code, Server } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Fullstack Web Development",
      provider: "Udemy",
      description: "Comprehensive course covering frontend and backend technologies, including React, Node.js, and database management.",
      icon: <Code className="text-primary" size={24} />,
      color: "primary",
      skills: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Supervised Machine Learning",
      provider: "Coursera",
      description: "Deep dive into machine learning algorithms, data preprocessing, model training, and evaluation techniques.",
      icon: <BookOpen className="text-secondary" size={24} />,
      color: "secondary",
      skills: ["Python", "Scikit-learn", "TensorFlow", "Data Analysis"]
    },
    {
      title: "Backend Development using Node.js",
      provider: "Udemy",
      description: "Specialized training in server-side development, API design, database integration, and deployment strategies.",
      icon: <Server className="text-accent" size={24} />,
      color: "accent",
      skills: ["Node.js", "Express", "API Design", "Database"]
    }
  ];

  return (
    <section id="certifications" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Continuous learning through recognized industry certifications and specialized courses
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="card-portfolio fade-in-up group"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Certification Header */}
            <div className="text-center mb-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-surface to-surface-light rounded-2xl mb-4 shadow-card group-hover:shadow-hover transition-all duration-300`}>
                {cert.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${cert.color}/10 border border-${cert.color}/20 rounded-full`}>
                <Award size={14} className={`text-${cert.color}`} />
                <span className={`text-sm font-medium text-${cert.color}`}>{cert.provider}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              {cert.description}
            </p>

            {/* Skills Covered */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">
                Skills Covered
              </h4>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`
                      px-2 py-1 text-xs font-medium rounded
                      bg-surface border border-border
                      text-${cert.color} hover:border-${cert.color}/50
                      transition-colors duration-300
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Verification Badge */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className={`w-2 h-2 bg-${cert.color} rounded-full`}></div>
                  <span>Verified Certificate</span>
                </div>
                <button className={`
                  text-xs text-${cert.color} hover:text-${cert.color}-hover
                  flex items-center gap-1 hover:gap-2
                  transition-all duration-300
                `}>
                  View <ExternalLink size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Philosophy */}
      <div className="mt-16 text-center">
        <div className="card-portfolio max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.6s' }}>
          <BookOpen className="text-primary mx-auto mb-4" size={32} />
          <h3 className="text-xl font-bold text-foreground mb-3">Commitment to Continuous Learning</h3>
          <p className="text-muted-foreground leading-relaxed">
            I believe in staying updated with the latest technologies and industry best practices. 
            These certifications represent my dedication to professional growth and technical excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;