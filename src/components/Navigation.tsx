
import React from 'react';

interface NavigationProps {
  activeSection: string;
  onScrollToSection: (section: string) => void;
}

const Navigation = ({ activeSection, onScrollToSection }: NavigationProps) => {
  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            SAHITH
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onScrollToSection(item.toLowerCase())}
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
  );
};

export default Navigation;
