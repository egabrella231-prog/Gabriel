import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  return (
    <div className={`flex flex-col leading-none select-none ${className}`}>
      <span className={`font-serif tracking-widest text-3xl font-bold ${light ? 'text-white' : 'text-meta-orange'}`}>
        META
      </span>
      <span className={`font-serif tracking-tight text-xl -mt-1 ${light ? 'text-gray-300' : 'text-meta-green'} font-bold`}>
        MORPHOSIS
      </span>
    </div>
  );
};

export default Logo;