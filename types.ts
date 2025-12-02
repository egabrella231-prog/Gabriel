import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactFormState {
  name: string;
  email: string;
  service: string;
  message: string;
}