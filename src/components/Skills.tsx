import { Code, Database, Wrench, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-primary" size={24} />,
      skills: ["Python", "Java", "C", "C++", "JavaScript", "SQL", "NoSQL"],
      color: "primary"
    },
    {
      title: "Frameworks & Technologies",
      icon: <Database className="text-secondary" size={24} />,
      skills: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Git", "GitHub"],
      color: "secondary"
    },
    {
      title: "Development Tools",
      icon: <Wrench className="text-accent" size={24} />,
      skills: ["VS Code", "IntelliJ IDEA Ultimate", "Postman", "Terminal"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Comprehensive technical skills with hands-on experience in modern development stack
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={categoryIndex} 
            className="card-portfolio fade-in-up"
            style={{ animationDelay: `${categoryIndex * 0.2}s` }}
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-surface to-surface-light rounded-2xl mb-4 shadow-card">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
            </div>

            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className={`
                    flex items-center justify-between p-3 rounded-lg 
                    bg-gradient-to-r from-surface to-surface-light
                    border border-border hover:border-${category.color}/50
                    transition-all duration-300 group
                  `}
                >
                  <span className="text-foreground font-medium">{skill}</span>
                  <div className={`w-2 h-2 bg-${category.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Technical Proficiency */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card-skill text-center fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Terminal className="text-primary mx-auto mb-3" size={32} />
          <h4 className="font-semibold text-foreground mb-2">Full-Stack</h4>
          <p className="text-sm text-muted-foreground">MERN Stack Development</p>
        </div>
        
        <div className="card-skill text-center fade-in-up" style={{ animationDelay: '0.7s' }}>
          <Database className="text-secondary mx-auto mb-3" size={32} />
          <h4 className="font-semibold text-foreground mb-2">Backend</h4>
          <p className="text-sm text-muted-foreground">REST APIs & Databases</p>
        </div>
        
        <div className="card-skill text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Code className="text-accent mx-auto mb-3" size={32} />
          <h4 className="font-semibold text-foreground mb-2">AI/ML</h4>
          <p className="text-sm text-muted-foreground">TensorFlow & Deep Learning</p>
        </div>
        
        <div className="card-skill text-center fade-in-up" style={{ animationDelay: '0.9s' }}>
          <Wrench className="text-primary mx-auto mb-3" size={32} />
          <h4 className="font-semibold text-foreground mb-2">DevOps</h4>
          <p className="text-sm text-muted-foreground">Git & Version Control</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;