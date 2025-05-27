
import React from 'react';
import { Briefcase, Award, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  return (
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
  );
};

export default Experience;
