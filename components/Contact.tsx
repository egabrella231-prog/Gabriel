import React from 'react';
import { IconPhone, IconMail, IconArrowRight } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-meta-dark text-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Metamorphose?</h2>
            <p className="text-slate-400 text-lg">
              Partner with us to build your intelligent workforce and digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-700">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
              <p className="text-slate-400">
                Whether you need a full automation audit or a new web identity, our team is ready to assist.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-meta-orange/10 rounded-full flex items-center justify-center text-meta-orange">
                    <IconPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wider">Call Us</p>
                    <a href="tel:+264813079841" className="text-xl font-medium hover:text-meta-orange transition-colors">
                      +264 81 307 9841
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-meta-green/10 rounded-full flex items-center justify-center text-meta-green">
                    <IconMail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wider">Email Us</p>
                    <a href="mailto:egabrella231@gmail.com" className="text-xl font-medium hover:text-meta-green transition-colors">
                      egabrella231@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-meta-orange transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Service Interest</label>
                <select className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-meta-orange transition-colors appearance-none">
                  <option>AI Agents & Support</option>
                  <option>Automation Workflows</option>
                  <option>Web Design & Dev</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-meta-orange transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-meta-orange to-orange-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-900/40 transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Request</span>
                <IconArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;