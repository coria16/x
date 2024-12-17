import React from 'react';
import { Shield, Zap, Clock } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-indigo-600" />,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with advanced firewalls and DDoS protection.'
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-600" />,
      title: 'High Performance',
      description: 'Lightning-fast servers with SSD storage and optimized configurations.'
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-600" />,
      title: '99.9% Uptime',
      description: 'Reliable hosting with guaranteed uptime and 24/7 monitoring.'
    }
  ];

  return (
    <section id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experience premium hosting with cutting-edge features and reliable support.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}