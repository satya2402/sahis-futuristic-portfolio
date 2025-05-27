
import React from 'react';
import { User, MapPin, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const codingProfiles = [
  { name: 'HackerRank', url: 'http://tinyurl.com/2kfnp9nk', color: 'bg-green-500' },
  { name: 'CodeChef', url: 'http://tinyurl.com/tsc2zd7j', color: 'bg-orange-500' },
  { name: 'LeetCode', url: 'http://tinyurl.com/yu24fpty', color: 'bg-yellow-500' },
  { name: 'Codeforces', url: 'https://tinyurl.com/yvydtvju', color: 'bg-blue-500' }
];

const About = () => {
  return (
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
  );
};

export default About;
