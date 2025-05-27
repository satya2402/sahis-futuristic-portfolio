
import React from 'react';
import { Trophy, User, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const achievements = [
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
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
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
  );
};

export default Achievements;
