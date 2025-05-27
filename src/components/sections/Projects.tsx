
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

const Projects = () => {
  return (
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
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-cyan-500 text-cyan-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
