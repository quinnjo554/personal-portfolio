import { useState, useEffect } from 'react';
import { Code, Github, Linkedin, Mail, Phone, MapPin, Calendar, ChevronRight, ExternalLink } from 'lucide-react';
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = "Full-Stack Developer | AI Integration | Microservice Architecture";

  // Typing animation effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-gray-900">
        <div className="text-center">
          <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent align-middle"></div>
          <div className="mt-4 text-xl font-bold text-blue-500">Initializing Portfolio...</div>
        </div>
      </div>
    );
  }

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      {/* Particle background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-20"
            style={{
              width: Math.random() * 5 + 2 + 'px',
              height: Math.random() * 5 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 border-b border-blue-500 z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-500 mr-2">&lt;</span>
              <span className="text-2xl font-bold">Quinn Johnson</span>
              <span className="text-2xl font-bold text-blue-500 ml-2">/&gt;</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className={`${activeSection === section ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-300 hover:text-blue-400'} 
                    capitalize transition-colors duration-300`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <div className="inline-block px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-500 rounded-full text-sm font-semibold mb-2">
                Software Engineer
              </div>
              <h1 className="text-5xl font-bold">
                Hello, I'm <br />
                <span className="text-blue-500">Quinn Johnson</span>
              </h1>
              <div className="h-8">
                <p className="text-xl text-gray-400">{typedText}<span className="animate-blink">|</span></p>
              </div>
              <p className="text-gray-400 max-w-lg">
                Driven computer science student with hands-on experience in full-stack development,
                AI integration, and microservice architecture.
              </p>
              <div className="flex space-x-4">
                <a href="#contact" onClick={() => handleSectionClick('contact')} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center">
                  Contact Me <ChevronRight size={16} className="ml-1" />
                </a>
                <a href="https://github.com/quinnjo554" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300 flex items-center">
                  GitHub <Github size={16} className="ml-1" />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <pre className="text-sm text-gray-300 overflow-auto">
                    {`// Quinn Johnson's Tech Stack
const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "Kotlin", "C#", "C++"],
  frontend: ["React", "Next.js", "Chakra UI", "Tailwind CSS"],
  backend: ["Node.js", "ASP.NET", "Spring Boot"],
  databases: ["MongoDB", "PostgreSQL"],
  devOps: ["Docker", "Git", "CI/CD"],
  ai: ["ML.NET", "Linear Regression", "Sentiment Analysis"],
};

// Currently working on:
const currentFocus = "Building scalable microservices";`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 max-w-6xl mx-auto px-4">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Professional Profile</h3>
              <p className="text-gray-300 mb-4">
                I'm a software engineer with a strong background in full-stack development. My passion lies in building
                scalable applications with modern technologies and integrating AI solutions to solve complex problems.
              </p>
              <p className="text-gray-300">
                With experience across multiple internships and personal projects, I've developed expertise in
                RESTful API design, microservice architecture, and frontend development with React and its ecosystem.
              </p>
              <div className="mt-6 flex flex-col space-y-3">
                <div className="flex items-center">
                  <MapPin className="text-blue-500 mr-2" size={18} />
                  <span>Fargo, United States</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-blue-500 mr-2" size={18} />
                  <span>Computer Science Student (since 2022)</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-4 text-blue-500">Education</h3>
                <div className="flex items-start">
                  <div className="flex-1">
                    <h4 className="font-bold">North Dakota State University</h4>
                    <p className="text-gray-400">Computer Science</p>
                    <p className="text-gray-500 text-sm">08/2022 - Present</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-4 text-blue-500">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {["AI/ML", "Microservices", "Cloud Architecture", "UI/UX Design", "Open Source"].map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-800 bg-opacity-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-4 mb-12 text-center">
              <h2 className="text-3xl font-bold">Work Experience</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>
            <div className="space-y-12">
              {[
                {
                  title: "Full-Stack Software Intern",
                  company: "Bushel",
                  period: "05/2024 - 08/2024",
                  location: "Fargo, ND",
                  achievements: [
                    "Engineered full-stack CRUD functionality for a trading platform, developing RESTful APIs within a microservice architecture and integrating them into a React-based frontend, enhancing company onboarding processes",
                    "Implemented robust error handling and data validation in the service layer, ensuring data integrity and improving system reliability for critical financial operations",
                    "Transitioned authentication system from internal tokens to Keycloak, implementing middleware for JWT validation and user permissions, significantly enhancing platform security and scalability"
                  ]
                },
                {
                  title: "Software Engineer Intern",
                  company: "Stealth Startup",
                  period: "01/2024 - 08/2024",
                  location: "Fargo, ND",
                  achievements: [
                    "Developed a full-stack AI-powered application that evaluates resumes against job descriptions, implementing the frontend in React and Chakra UI, and creating RESTful APIs with Python",
                    "Collaborated directly with the CEO and other engineers to define user stories, requirements, and design, ensuring alignment between product vision and technical implementation"
                  ]
                },
                {
                  title: "Software Engineer Intern",
                  company: "Bushel",
                  period: "05/2023 - 08/2023",
                  location: "Fargo, ND",
                  achievements: [
                    "Built enterprise level REST APIs and end-to-end tests with Kotlin Spring",
                    "Created modular and composable React components",
                    "Collaborated with project managers and UI/UX designers to meet changing customer requirements"
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-500">{job.title}</h3>
                      <p className="text-gray-300">{job.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-gray-400">{job.period}</p>
                      <p className="text-gray-500 text-sm">{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-3xl font-bold">Personal Projects</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-500 group-hover:text-blue-400">Chat Chirp (Twitter Clone)</h3>
                <p className="text-gray-300 mb-4">
                  A Twitter-inspired social media platform with intelligent sentiment analysis features
                </p>
                <div className="space-y-2 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-200">Key Features:</h4>
                    <ul className="space-y-1 mt-1">
                      <li className="flex items-start">
                        <ChevronRight className="text-blue-500 mt-1 mr-1 flex-shrink-0" size={14} />
                        <span className="text-gray-300 text-sm">Next.js, Chakra UI, and Tailwind CSS for the frontend</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="text-blue-500 mt-1 mr-1 flex-shrink-0" size={14} />
                        <span className="text-gray-300 text-sm">ML.NET Model Builder and Linear Regression for sentiment analysis</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="text-blue-500 mt-1 mr-1 flex-shrink-0" size={14} />
                        <span className="text-gray-300 text-sm">ASP.NET backend with Docker containerization</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js", "Chakra UI", "Tailwind", "ASP.NET", "Docker", "ML.NET"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a href="https://github.com/quinnjo554" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 flex items-center text-sm">
                    View on GitHub <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-500 group-hover:text-blue-400">AI Resume Evaluator</h3>
                <p className="text-gray-300 mb-4">
                  Full-stack application that uses AI to match resumes with job descriptions
                </p>
                <div className="space-y-2 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-200">Key Features:</h4>
                    <ul className="space-y-1 mt-1">
                      <li className="flex items-start">
                        <ChevronRight className="text-blue-500 mt-1 mr-1 flex-shrink-0" size={14} />
                        <span className="text-gray-300 text-sm">React frontend with Chakra UI components</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="text-blue-500 mt-1 mr-1 flex-shrink-0" size={14} />
                        <span className="text-gray-300 text-sm">Python backend with NLP capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="text-blue-500 mt-1 mr-1 flex-shrink-0" size={14} />
                        <span className="text-gray-300 text-sm">RESTful API architecture for scalability</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Chakra UI", "Python", "RESTful API", "NLP", "AI"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a href="https://github.com/quinnjo554" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 flex items-center text-sm">
                    View on GitHub <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-800 bg-opacity-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-4 mb-12 text-center">
              <h2 className="text-3xl font-bold">Technical Skills</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Programming Languages",
                  icon: <Code size={24} />,
                  skills: ["TypeScript", "JavaScript", "Python", "Java", "Kotlin", "C#", "C++"]
                },
                {
                  category: "Frontend Development",
                  icon: <div className="text-2xl">🖥️</div>,
                  skills: ["React", "Next.js", "Chakra UI", "Tailwind CSS", "HTML/CSS"]
                },
                {
                  category: "Backend Development",
                  icon: <div className="text-2xl">⚙️</div>,
                  skills: ["Node.js", "ASP.NET", "Spring Boot", "RESTful APIs", "Microservices"]
                },
                {
                  category: "DevOps & Tools",
                  icon: <div className="text-2xl">🛠️</div>,
                  skills: ["Docker", "Git", "CI/CD", "Linux", "Testing"]
                },
                {
                  category: "AI & Data",
                  icon: <div className="text-2xl">🧠</div>,
                  skills: ["ML.NET", "Linear Regression", "Sentiment Analysis", "Data Validation"]
                },
                {
                  category: "Soft Skills",
                  icon: <div className="text-2xl">👥</div>,
                  skills: ["Team Collaboration", "Problem-Solving", "Communication", "Agile Methodology"]
                }
              ].map((category, index) => (
                <div key={index} className="bg-gray-900 border border-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 bg-opacity-20 text-blue-500 mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm hover:bg-blue-900 hover:border-blue-700 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-400">
                Always expanding my skillset and exploring new technologies
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 max-w-6xl mx-auto px-4">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-3xl font-bold text-blue-500">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-gray-400 max-w-xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you!
            </p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-lg w-full space-y-6">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 bg-opacity-20 text-blue-500 mr-3">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a href="mailto:quinnjohnson24@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      quinnjohnson24@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 bg-opacity-20 text-blue-500 mr-3">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <a href="tel:7019553409" className="text-blue-400 hover:text-blue-300 transition-colors">
                      701-955-3409
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 bg-opacity-20 text-blue-500 mr-3">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">LinkedIn</h3>
                    <a href="https://linkedin.com/in/quinn-johnson224" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      linkedin.com/in/quinn-johnson224
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 bg-opacity-20 text-blue-500 mr-3">
                    <Github size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">GitHub</h3>
                    <a href="https://github.com/quinnjo554" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      github.com/quinnjo554
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/quinnjo554" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/quinn-johnson224" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:quinnjohnson24@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Quinn Johnson. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with React and Tailwind CSS
          </p>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0.2; }
          50% { transform: translateY(-20px); opacity: 0.1; }
          100% { transform: translateY(0px); opacity: 0.2; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}} />
    </div>
  );
}
export default App
