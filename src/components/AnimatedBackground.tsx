
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 opacity-20">
      <div className="absolute inset-0 bg-slate-800/20 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
