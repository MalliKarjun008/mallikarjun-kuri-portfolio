import { Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.E. in Computer Science and Engineering",
      institution: "BMS College of Engineering",
      period: "2022 - 2026",
      score: "CGPA: 8.93",
      location: "Bangalore",
      icon: "🎓",
      color: "primary"
    },
    {
      degree: "Pre University",
      institution: "Konnur PU College",
      period: "2021 - 2022",
      score: "95.16%",
      location: "Konnur",
      icon: "📚",
      color: "secondary"
    },
    {
      degree: "High School",
      institution: "JSS Rampur",
      period: "2019 - 2020",
      score: "98.72%",
      location: "Rampur",
      icon: "🏫",
      color: "accent"
    }
  ];

  return (
    <section id="education" className="section-container bg-surface/50">
      <div className="text-center mb-16">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic journey with consistent excellence and strong foundation in computer science
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden md:block"></div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
              {/* Content */}
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-8 md:mb-0`}>
                <div className="card-portfolio fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{edu.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                      <h4 className={`text-lg font-semibold text-${edu.color} mb-3`}>{edu.institution}</h4>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award size={16} />
                          <span className={`text-${edu.color} font-semibold`}>{edu.score}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:flex w-2/12 justify-center">
                <div className={`w-4 h-4 bg-${edu.color} rounded-full border-4 border-background shadow-lg`}></div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;