import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { IconBot, IconWorkflow, IconWebDesign } from './components/Icons';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main>
        <Hero />
        
        <ServiceSection
          id="agents"
          theme="orange"
          subtitle="Customer Intelligence"
          title="AI Agents & Support"
          description="Deploy intelligent, human-like AI agents that handle customer support, appointment booking, and inquiries 24/7. Our agents learn from your business data to provide accurate, empathetic responses instantly."
          icon={<IconBot className="w-8 h-8" />}
          features={[
            "Natural Language Processing for human-like chat",
            "Automated Appointment Booking & Calendar Sync",
            "24/7 Availability across WhatsApp, Web, and SMS",
            "Seamless escalation to human staff when needed"
          ]}
          imageSrc="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop"
        />

        <ServiceSection
          id="automation"
          theme="green"
          subtitle="Operational Efficiency"
          title="Workflow Automation"
          description="Stop wasting time on repetitive tasks. We build custom automation pipelines that connect your apps, manage data entry, and streamline operations, allowing your team to focus on high-value work."
          icon={<IconWorkflow className="w-8 h-8" />}
          features={[
            "Custom API Integrations (Zapier, Make, n8n)",
            "Automated Email Marketing Sequences",
            "CRM Data Entry & Synchronization",
            "Inventory & Order Management Automation"
          ]}
          imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          reversed
        />

        <ServiceSection
          id="design"
          theme="dark"
          subtitle="Visual Identity"
          title="Web App & Site Design"
          description="Your digital storefront matters. We create stunning, high-performance websites and web applications designed to convert visitors into loyal customers. Mobile-first, fast, and aesthetically unique."
          icon={<IconWebDesign className="w-8 h-8" />}
          features={[
            "Modern, Responsive UI/UX Design",
            "Single Page Applications (React/Next.js)",
            "High-Converting Landing Pages",
            "Brand Identity & Logo Integration"
          ]}
          imageSrc="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
        />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;