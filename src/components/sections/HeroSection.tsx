import React from 'react';
import { Label } from '../ui/Label';

export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  logo?: string;
  logoAlt?: string;
}

export function HeroSection({
  title = "Claims Wallet Max",
  subtitle = "Access your funds instantly and choose how you want to receive your payment. Enhanced features with maximum flexibility.",
  logo = "Juice.png",
  logoAlt = "Juice Financial"
}: HeroSectionProps) {
  return (
    <div className="max-w-4xl mx-auto text-center mb-14">
      <div className="mb-8 flex justify-center">
        <img
          src={logo}
          alt={logoAlt}
          className="h-16"
        />
      </div>
      <Label 
        as="h1" 
        variant="heading" 
        size="5xl" 
        className="mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
      >
        {title}
      </Label>
      <Label 
        as="p" 
        variant="body" 
        size="xl" 
        className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
      >
        {subtitle}
      </Label>
    </div>
  );
}
