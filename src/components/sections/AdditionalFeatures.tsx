import React from 'react';
import { Shield, Globe, Clock } from 'lucide-react';
import { Card } from '../ui/Card';
import { Label } from '../ui/Label';

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color?: string;
}

export interface AdditionalFeaturesProps {
  features?: Feature[];
  title?: string;
}

const defaultFeatures: Feature[] = [
  {
    icon: Shield,
    title: 'Secure Access',
    description: 'Bank-grade security protecting your virtual card details',
    color: 'blue'
  },
  {
    icon: Globe,
    title: 'Global Acceptance',
    description: 'Use your virtual card anywhere Mastercard is accepted',
    color: 'blue'
  },
  {
    icon: Clock,
    title: 'Real-time Updates',
    description: 'Track transactions and balance updates instantly',
    color: 'blue'
  }
];

export function AdditionalFeatures({ 
  features = defaultFeatures
}: AdditionalFeaturesProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} padding="lg" hover>
            <div className="inline-flex p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
              <feature.icon className="h-6 w-6" />
            </div>
            <Label as="h3" variant="subheading" size="lg" className="mb-2">
              {feature.title}
            </Label>
            <Label as="p" variant="body" className="text-gray-600 dark:text-gray-400">
              {feature.description}
            </Label>
          </Card>
        ))}
      </div>
    </div>
  );
}
