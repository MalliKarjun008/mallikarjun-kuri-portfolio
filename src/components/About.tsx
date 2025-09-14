import { GraduationCap, Heart, Code, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about creating innovative solutions and building scalable systems
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="fade-in-left">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a final-year <span className="text-primary font-semibold">Computer Science Engineering</span> student 
              at BMS College of Engineering with a strong passion for technology and innovation.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech is driven by curiosity and a desire to solve real-world problems through 
              <span className="text-secondary font-semibold"> fullstack development</span>, 
              <span className="text-accent font-semibold"> artificial intelligence</span>, and 
              <span className="text-primary font-semibold"> scalable system design</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. 
              My approach combines strong problem-solving skills with creative thinking to build 
              solutions that make a difference.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-primary">
                <GraduationCap size={20} />
                <span className="text-sm font-medium">Student</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <Code size={20} />
                <span className="text-sm font-medium">Developer</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Brain size={20} />
                <span className="text-sm font-medium">AI Enthusiast</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Heart size={20} />
                <span className="text-sm font-medium">Problem Solver</span>
              </div>
            </div>
          </div>
        </div>

        <div className="fade-in-right">
          <div className="grid grid-cols-2 gap-6">
            <div className="card-skill text-center">
              <div className="text-3xl font-bold text-primary mb-2">8.93</div>
              <div className="text-sm text-muted-foreground">Current CGPA</div>
            </div>
            <div className="card-skill text-center">
              <div className="text-3xl font-bold text-secondary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Years Coding</div>
            </div>
            <div className="card-skill text-center">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="card-skill text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;