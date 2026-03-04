import { Github, Mail, Phone, MapPin, Code, Briefcase, GraduationCap, Award, Heart, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    languages: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'C#'],
    frontend: ['React.js', 'Bootstrap', 'Tailwind CSS'],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma'],
    soft: ['Effective Communication', 'Team Work', 'Flexibility', 'Problem Solving']
  };

  const education = [
    {
      degree: 'Master of Computer Applications',
      institution: 'DR.M.G.R Education and Research Institute',
      location: 'Chennai',
      period: '08/2025 - Present'
    },
    {
      degree: 'Bachelor of Computer Application',
      institution: 'DR.M.G.R Education and Research Institute',
      location: 'Chennai',
      period: '2022 - 2025'
    }
  ];

  const certifications = [
    { name: 'Diploma in Computer Application', issuer: 'REE-TECH COMPUTER EDUCATION & CARRIER' },
    { name: 'Cyber Security: Capture the Flag (CTF)', issuer: 'TECHKNOTS ACADEMY' },
    { name: 'UI / UX Design with React JS', issuer: 'Workshop' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-cyan-400 tracking-widest animate-text-glow">ANISH P</span>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'education', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === section ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="inline-block animate-slide-up-stagger">Hi, I'm</span> <span className="text-cyan-400 animate-glitch ml-2">ANISH P</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 mb-8 animate-slide-up-stagger" style={{ animationDelay: '0.3s' }}>
              Aspiring Full-Stack Developer | MCA Student
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="tel:7305677563"
                className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-all duration-300 transform hover:scale-105 animate-slide-up-stagger"
                style={{ animationDelay: '0.5s' }}
              >
                <Phone size={20} />
                Contact Me
              </a>
              <a
                href="https://anish-vj28.github.io/repository/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-cyan-500 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 transform hover:scale-105 animate-slide-up-stagger"
                style={{ animationDelay: '0.65s' }}
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a href="mailto:anishvj2810@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-125 hover:-translate-y-1 animate-float" style={{ animationDelay: '0s' }}>
                <Mail size={24} />
              </a>
              <a href="https://anish-vj28.github.io/repository/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-125 hover:-translate-y-1 animate-float" style={{ animationDelay: '0.2s' }}>
                <Github size={24} />
              </a>
              <div className="flex items-center gap-2 text-gray-400 animate-float" style={{ animationDelay: '0.4s' }}>
                <MapPin size={24} />
                <span>Chennai</span>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-cyan-400" />
        </button>
      </section>

      <section id="about" className="min-h-screen flex items-center py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Motivated and detail-oriented MCA student with a strong foundation in front-end and back-end development.
                Eager to gain hands-on experience in software engineering, cloud technologies, and full-stack development.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Seeking an internship opportunity at IBM to contribute to real-world projects while continuing to grow as
                a developer in a fast-paced, innovative environment.
              </p>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Languages</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-300 w-24">English</span>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <span className="text-gray-400 text-sm">Proficient</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-300 w-24">Tamil</span>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="text-gray-400 text-sm">Native</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 animate-rotate-in" style={{ animationDelay: '0.3s' }}>
                <Award className="text-cyan-400 mb-4 animate-pulse" size={32} />
                <h3 className="text-xl font-semibold mb-2">Key Achievement</h3>
                <p className="text-gray-400">NATIONAL CADET CROPS</p>
                <p className="text-gray-300">Complete my grading - A*</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 animate-rotate-in" style={{ animationDelay: '0.5s' }}>
                <Heart className="text-cyan-400 mb-4 animate-pulse" size={32} />
                <h3 className="text-xl font-semibold mb-2">Volunteering</h3>
                <p className="text-gray-400">Sattuva NGO (01/2025 - Present)</p>
                <ul className="text-gray-300 text-sm mt-2 space-y-1">
                  <li>• Supported inclusive education initiatives</li>
                  <li>• Led digital literacy programs</li>
                  <li>• Training for differently-abled students</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-cyan-400" size={24} />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              {skills.languages.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-gray-800 px-4 py-3 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-500/50 animate-slide-up-stagger"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-cyan-400" size={24} />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              {skills.frontend.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-gray-800 px-4 py-3 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-500/50 animate-slide-up-stagger"
                  style={{ animationDelay: `${index * 80 + 200}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-cyan-400" size={24} />
                <h3 className="text-xl font-semibold">Tools</h3>
              </div>
              {skills.tools.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-gray-800 px-4 py-3 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-500/50 animate-slide-up-stagger"
                  style={{ animationDelay: `${index * 80 + 400}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-cyan-400" size={24} />
                <h3 className="text-xl font-semibold">Soft Skills</h3>
              </div>
              {skills.soft.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-gray-800 px-4 py-3 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-500/50 animate-slide-up-stagger"
                  style={{ animationDelay: `${index * 80 + 600}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="min-h-screen flex items-center py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-cyan-400">Education</span>
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <GraduationCap className="text-cyan-400 flex-shrink-0 mt-1" size={32} />
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-gray-400 text-lg mb-1">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {edu.location}
                      </span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-cyan-400">Certifications</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Award className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-gray-300 text-lg mb-12">
              I'm currently seeking internship opportunities and open to collaboration.
              Feel free to reach out if you'd like to connect!
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:anishvj2810@gmail.com"
                className="flex items-center gap-4 bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="text-cyan-400" size={32} />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-gray-200">anishvj2810@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:7305677563"
                className="flex items-center gap-4 bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="text-cyan-400" size={32} />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-gray-200">7305677563</p>
                </div>
              </a>
              <a
                href="https://anish-vj28.github.io/repository/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
              >
                <Github className="text-cyan-400" size={32} />
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p className="text-gray-200">anish-vj28</p>
                </div>
              </a>
              <div className="flex items-center gap-4 bg-gray-900 p-6 rounded-lg border border-gray-700">
                <MapPin className="text-cyan-400" size={32} />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray-200">Chennai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2025 Anish P. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
