
import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Download, Mail, Phone, MapPin, ExternalLink, Code, Database, Server, Cloud, Award, Calendar, User, GraduationCap, Briefcase, Trophy, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
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

  const handleDownloadResume = () => {
    toast({
      title: "Resume Download",
      description: "Resume download would be initiated here. Please add your resume link.",
    });
  };

  const skills = {
    languages: ['Java', 'C', 'Python'],
    web: ['HTML', 'CSS', 'JavaScript', 'Spring Boot', 'Full Stack'],
    databases: ['SQL'],
    concepts: ['Data Structures', 'Problem Solving'],
    tools: ['Git', 'Documentation'],
    soft: ['Communication', 'Teamwork', 'Decision-making', 'Critical Thinking']
  };

  const projects = [
    {
      title: 'Hospital Management System',
      role: 'Frontend + DB connection',
      tech: ['HTML', 'CSS', 'JavaScript', 'Spring Boot'],
      description: 'Complete healthcare management solution with patient records, appointments, and staff management.'
    },
    {
      title: 'Project Management System',
      role: 'Frontend + Business Logic',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: 'Comprehensive project tracking and team collaboration platform with task management.'
    }
  ];

  const codingProfiles = [
    { name: 'HackerRank', url: 'http://tinyurl.com/2kfnp9nk', color: 'bg-green-500' },
    { name: 'CodeChef', url: 'http://tinyurl.com/tsc2zd7j', color: 'bg-orange-500' },
    { name: 'LeetCode', url: 'http://tinyurl.com/yu24fpty', color: 'bg-yellow-500' },
    { name: 'Codeforces', url: 'https://tinyurl.com/yvydtvju', color: 'bg-blue-500' }
  ];

  const timeline = [
    { year: '2021', tech: 'Java & C', description: 'Started programming journey' },
    { year: '2022', tech: 'Web Dev Stack', description: 'Mastered frontend technologies' },
    { year: '2023', tech: 'Spring Boot', description: 'Advanced backend development' },
    { year: '2023', tech: 'AWS/RPA', description: 'Cloud & automation expertise' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-slate-800/20 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              SAHITH
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm hover:text-cyan-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
        <div className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            KHAMBHAMPATI SAHITH
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Competent multitasker with a strong work ethic and creative problem-solver
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="border-purple-500 text-purple-300 hover:bg-purple-500/20 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/20 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="bg-white/5 backdrop-blur-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Dependable, committed individual that works diligently and creatively. 
                  Ready to accept any assignment that may benefit the team.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="mr-3 h-4 w-4 text-purple-400" />
                    Bhadrachalam, India
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="mr-3 h-4 w-4 text-purple-400" />
                    2100030252cseh@gmail.com
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="mr-3 h-4 w-4 text-purple-400" />
                    +91 9704600630
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {codingProfiles.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${profile.color} p-4 rounded-lg text-white text-center font-semibold hover:scale-105 transition-transform duration-300`}
                  >
                    {profile.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-6">
            {[
              {
                degree: 'B.Tech CSE (Honors)',
                institution: 'KL University',
                score: 'CGPA: 9.4',
                year: '2021–2025'
              },
              {
                degree: 'Intermediate',
                institution: 'PAGE Junior College',
                score: '80.4%',
                year: '2019–2021'
              },
              {
                degree: 'High School',
                institution: 'Winfield High School',
                score: 'CGPA: 8.7',
                year: '2018–2019'
              }
            ].map((edu, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-2">{edu.degree}</h3>
                      <p className="text-gray-300">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-purple-400 font-semibold">{edu.score}</p>
                      <p className="text-gray-400">{edu.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-cyan-400 capitalize flex items-center">
                    {category === 'languages' && <Code className="mr-2 h-5 w-5" />}
                    {category === 'web' && <Server className="mr-2 h-5 w-5" />}
                    {category === 'databases' && <Database className="mr-2 h-5 w-5" />}
                    {category === 'concepts' && <BookOpen className="mr-2 h-5 w-5" />}
                    {category === 'tools' && <Award className="mr-2 h-5 w-5" />}
                    {category === 'soft' && <User className="mr-2 h-5 w-5" />}
                    {category.replace('_', ' ')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-cyan-400">{project.title}</CardTitle>
                  <CardDescription className="text-purple-300">{project.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-cyan-500 text-cyan-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/20">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Demo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Timeline */}
      <section id="timeline" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technology Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <Card className={`w-80 bg-white/5 backdrop-blur-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Calendar className="mr-2 h-4 w-4 text-purple-400" />
                      <span className="text-purple-400 font-semibold">{item.year}</span>
                    </div>
                    <h3 className="text-cyan-400 font-semibold mb-2">{item.tech}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 backdrop-blur-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center">
                  <Briefcase className="mr-2 h-5 w-5" />
                  AICTE Virtual Internships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-purple-300">AWS Cloud</h4>
                    <p className="text-gray-400 text-sm">Dec 2022 – Feb 2023</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-300">Robotic Process Automation (BluePrism)</h4>
                    <p className="text-gray-400 text-sm">May 2023 – Jul 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Cloud className="mr-3 h-5 w-5 text-orange-400" />
                    <span className="text-gray-300">AWS Certified Cloud Practitioner</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="mr-3 h-5 w-5 text-red-400" />
                    <span className="text-gray-300">Red Hat Certified Enterprise Application Developer</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="h-8 w-8" />,
                title: "Technical Certifications",
                description: "AWS and Red Hat certified professional"
              },
              {
                icon: <User className="h-8 w-8" />,
                title: "Student Leadership",
                description: "FOCUS – Student Lead role in governance"
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Coding Excellence",
                description: "Active on multiple competitive programming platforms"
              }
            ].map((achievement, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 text-center">
                <CardContent className="p-6">
                  <div className="text-purple-400 mb-4 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h3 className="text-cyan-400 font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to collaborate on exciting projects? Let's build something amazing together!
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:2100030252cseh@gmail.com"
              className="flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </a>
            <a
              href="#"
              className="flex items-center bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
            <a
              href="#"
              className="flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Khambhampati Sahith. Built with passion and powered by innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
