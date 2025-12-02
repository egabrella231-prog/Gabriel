import React from 'react';
import { IconCheck } from './Icons';

interface ServiceSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  imageSrc: string;
  reversed?: boolean;
  theme: 'orange' | 'green' | 'dark';
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  id,
  title,
  subtitle,
  description,
  features,
  icon,
  imageSrc,
  reversed = false,
  theme,
}) => {
  const isDark = theme === 'dark';
  const accentColor = theme === 'orange' ? 'text-meta-orange' : theme === 'green' ? 'text-meta-green' : 'text-blue-400';
  const bgColor = isDark ? 'bg-slate-900' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-slate-900';
  const subTextColor = isDark ? 'text-slate-400' : 'text-slate-600';

  return (
    <section id={id} className={`py-24 ${bgColor} relative overflow-hidden`}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col md:flex-row gap-16 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          
          <div className="w-full md:w-1/2 space-y-8">
            <div className={`inline-flex items-center justify-center p-3 rounded-xl ${isDark ? 'bg-slate-800' : 'bg-slate-100'} shadow-sm`}>
              <div className={`${accentColor}`}>
                {icon}
              </div>
            </div>
            
            <h2 className={`text-4xl md:text-5xl font-serif font-bold ${textColor} leading-tight`}>
              <span className={`block text-lg font-sans font-medium uppercase tracking-widest mb-2 ${accentColor}`}>
                {subtitle}
              </span>
              {title}
            </h2>
            
            <p className={`text-lg ${subTextColor} leading-relaxed`}>
              {description}
            </p>
            
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <div className={`mt-1 p-0.5 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                    <IconCheck className={`w-4 h-4 ${accentColor}`} />
                  </div>
                  <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 relative">
             <div className={`absolute inset-0 ${theme === 'orange' ? 'bg-orange-200' : theme === 'green' ? 'bg-green-200' : 'bg-blue-900'} rounded-3xl transform rotate-3 scale-95 opacity-20`}></div>
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/10 h-[500px]">
                <img 
                  src={imageSrc} 
                  alt={title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <p className="font-serif italic text-xl opacity-90">"Transformation through innovation."</p>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;