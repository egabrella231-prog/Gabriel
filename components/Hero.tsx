import React from 'react';
import { IconArrowRight, IconButterfly } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-meta-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-meta-green/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm text-sm font-medium text-meta-green mb-4">
            <span className="flex h-2 w-2 rounded-full bg-meta-green"></span>
            <span>Now accepting new enterprise clients</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight">
            Evolve Your <br />
            <span className="bg-gradient-to-r from-meta-orange to-amber-500 gradient-text text-transparent">
              Digital Reality
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
            From raw potential to polished excellence. We build intelligent AI agents, streamline complex workflows, and design stunning digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group flex items-center justify-center space-x-2 px-8 py-4 bg-meta-orange text-white rounded-full font-semibold hover:bg-orange-700 transition-all shadow-lg shadow-orange-500/30">
              <span>Start Transformation</span>
              <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#agents" className="flex items-center justify-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:border-meta-green hover:text-meta-green transition-all">
              Explore Services
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Abstract Visual Metaphor for Metamorphosis */}
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-meta-green to-meta-orange opacity-10 rounded-full animate-pulse"></div>
            <div className="absolute inset-8 bg-white/40 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 flex items-center justify-center overflow-hidden">
               <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-meta-orange to-orange-400 rounded-2xl flex items-center justify-center shadow-lg mb-6 text-white transform rotate-3 hover:rotate-6 transition-transform duration-500">
                    <IconButterfly className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">Automate.</h3>
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">Engage.</h3>
                  <h3 className="text-2xl font-serif font-bold text-slate-800">Grow.</h3>
                  <p className="mt-4 text-sm text-slate-500">
                    AI-Driven Customer Success
                  </p>
               </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 -right-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-[bounce_3s_infinite]">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-semibold text-slate-700">Agent Active</span>
              </div>
            </div>
            
             <div className="absolute -bottom-4 left-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-[bounce_4s_infinite]">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-bold text-slate-500">Efficiency</span>
                <span className="text-sm font-bold text-meta-green">+400%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;