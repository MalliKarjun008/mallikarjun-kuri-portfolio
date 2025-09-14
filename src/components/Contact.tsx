import { Mail, Phone, MapPin, Linkedin, Github, Send, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a backend service
    console.log('Form submitted:', formData);
    // For now, we'll just open the email client
    const subject = encodeURIComponent('Contact from Portfolio Website');
    const body = encodeURIComponent(`Hi Mallikarjun,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:mallikarjunkuri334@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={20} />,
      label: "Email",
      value: "mallikarjunkuri334@gmail.com",
      href: "mailto:mallikarjunkuri334@gmail.com"
    },
    {
      icon: <Phone className="text-secondary" size={20} />,
      label: "Phone",
      value: "+91-7483989991",
      href: "tel:+917483989991"
    },
    {
      icon: <MapPin className="text-accent" size={20} />,
      label: "Location",
      value: "Bangalore, Karnataka",
      href: "https://maps.google.com/?q=Bangalore,Karnataka"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/mallikarjun-kuri-505211207/",
      color: "primary"
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: "https://github.com/MalliKarjun008",
      color: "secondary"
    }
  ];

  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's connect and discuss opportunities, collaborations, or just have a tech chat!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="fade-in-left">
          <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm always excited to connect with fellow developers, potential employers, 
            or anyone interested in technology and innovation. Feel free to reach out!
          </p>

          <div className="space-y-6 mb-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-primary/50 hover:bg-surface-light transition-all duration-300 group"
              >
                <div className="p-2 bg-gradient-to-br from-surface to-surface-light rounded-lg shadow-card">
                  {info.icon}
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{info.label}</div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {info.value}
                  </div>
                </div>
                <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 text-muted-foreground transition-opacity" />
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Connect on Social</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center gap-3 px-4 py-3 bg-surface border border-border rounded-xl
                    hover:border-${social.color}/50 hover:bg-${social.color}/10
                    transition-all duration-300 group
                  `}
                >
                  <div className={`text-${social.color}`}>{social.icon}</div>
                  <span className="text-foreground font-medium">{social.name}</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 text-muted-foreground transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="fade-in-right">
          <div className="card-portfolio">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hi!"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-hero-primary flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;