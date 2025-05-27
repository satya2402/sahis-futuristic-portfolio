
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const educationData = [
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
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
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
  );
};

export default Education;
