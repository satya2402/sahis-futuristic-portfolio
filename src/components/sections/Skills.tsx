
import React from 'react';
import { Code, Database, Server, Award, User, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = {
  languages: ['Java', 'C', 'Python'],
  web: ['HTML', 'CSS', 'JavaScript', 'Spring Boot', 'Full Stack'],
  databases: ['SQL'],
  concepts: ['Data Structures', 'Problem Solving'],
  tools: ['Git', 'Documentation'],
  soft: ['Communication', 'Teamwork', 'Decision-making', 'Critical Thinking']
};

const Skills = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'languages': return <Code className="mr-2 h-5 w-5" />;
      case 'web': return <Server className="mr-2 h-5 w-5" />;
      case 'databases': return <Database className="mr-2 h-5 w-5" />;
      case 'concepts': return <BookOpen className="mr-2 h-5 w-5" />;
      case 'tools': return <Award className="mr-2 h-5 w-5" />;
      case 'soft': return <User className="mr-2 h-5 w-5" />;
      default: return null;
    }
  };

  return (
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
                  {getIcon(category)}
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
  );
};

export default Skills;
