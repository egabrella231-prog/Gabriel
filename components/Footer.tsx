import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <Logo light className="scale-75 origin-left" />
          <p className="mt-4 text-sm max-w-xs">
            Transforming businesses through intelligent automation and stunning design.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <span className="text-slate-600">© {new Date().getFullYear()} Metamorphosis</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;