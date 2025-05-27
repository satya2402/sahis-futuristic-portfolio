
import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  isVisible: boolean;
  onDownloadResume: () => void;
  onScrollToSection: (section: string) => void;
}

const Hero = ({ isVisible, onDownloadResume, onScrollToSection }: HeroProps) => {
  return (
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
            onClick={onDownloadResume}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button
            onClick={() => onScrollToSection('projects')}
            variant="outline"
            className="border-purple-500 text-purple-300 hover:bg-purple-500/20 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            View Projects
          </Button>
          <Button
            onClick={() => onScrollToSection('contact')}
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
  );
};

export default Hero;
