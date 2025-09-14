import { Heart, Trophy, Users, Target } from 'lucide-react';

const Extracurricular = () => {
  const activities = [
    {
      title: "Community Volunteering",
      description: "Teaching underprivileged children and organizing awareness drives to make a positive impact in the community.",
      icon: <Heart className="text-primary" size={24} />,
      color: "primary",
      highlights: ["Teaching underprivileged children", "Awareness campaigns", "Community outreach"]
    },
    {
      title: "Sports & Fitness",
      description: "Actively engaged in various sports activities, promoting teamwork, discipline, and maintaining physical wellness.",
      icon: <Trophy className="text-secondary" size={24} />,
      color: "secondary",
      highlights: ["Team sports participation", "Physical fitness", "Leadership skills"]
    }
  ];

  return (
    <section id="extracurricular" className="section-container bg-surface/50">
      <div className="text-center mb-16">
        <h2 className="section-title">Beyond Academics</h2>
        <p className="section-subtitle">
          Engaging in meaningful activities that shape character and build leadership skills
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className="card-portfolio fade-in-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className={`p-3 bg-gradient-to-br from-surface to-surface-light rounded-xl shadow-card`}>
                {activity.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Target size={16} className={`text-${activity.color}`} />
                Key Contributions
              </h4>
              <ul className="space-y-2">
                {activity.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className={`w-1.5 h-1.5 bg-${activity.color} rounded-full`}></div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Values Section */}
      <div className="text-center">
        <div className="card-portfolio max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Users className="text-accent mx-auto mb-6" size={40} />
          <h3 className="text-2xl font-bold text-foreground mb-4">Core Values</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            My extracurricular activities reflect my commitment to giving back to society, 
            continuous personal growth, and building meaningful connections within the community.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Community</div>
              <div className="text-sm text-muted-foreground">Giving back through education and awareness</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-2">Leadership</div>
              <div className="text-sm text-muted-foreground">Building teamwork and collaboration skills</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">Growth</div>
              <div className="text-sm text-muted-foreground">Continuous personal and professional development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;