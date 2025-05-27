
import React from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const timeline = [
  { year: '2021', tech: 'Java & C', description: 'Started programming journey' },
  { year: '2022', tech: 'Web Dev Stack', description: 'Mastered frontend technologies' },
  { year: '2023', tech: 'Spring Boot', description: 'Advanced backend development' },
  { year: '2023', tech: 'AWS/RPA', description: 'Cloud & automation expertise' }
];

const Timeline = () => {
  return (
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
  );
};

export default Timeline;
