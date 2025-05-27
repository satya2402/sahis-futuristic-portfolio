
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Ready to collaborate on exciting projects? Let's build something amazing together!
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="mailto:2100030252cseh@gmail.com"
            className="flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Email Me
          </a>
          <a
            href="https://github.com/sahithkumar1999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sahith-kumar-khambhampati"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
