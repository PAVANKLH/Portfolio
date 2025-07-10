
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, Cloud, Network, BookOpen, Users } from 'lucide-react';

export const Certifications = () => {
  const certifications = [
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      icon: Cloud,
      color: "blue",
      category: "Cloud Computing"
    },
    {
      name: "Pega System Architect 8.7",
      issuer: "Pega",
      icon: Award,
      color: "red",
      category: "Enterprise Development"
    },
    {
      name: "Aviatrix Certified Engineer",
      issuer: "Aviatrix",
      icon: Network,
      color: "green",
      category: "Cloud Networking"
    },
    {
      name: "AI Fundamentals",
      issuer: "Microsoft",
      icon: Shield,
      color: "purple",
      category: "Artificial Intelligence"
    },
    {
      name: "Cisco Networking",
      issuer: "Cisco",
      icon: Network,
      color: "blue",
      category: "Networking"
    },
    {
      name: "OpenEDG Python",
      issuer: "OpenEDG",
      icon: BookOpen,
      color: "yellow",
      category: "Programming"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 border-blue-500/20 bg-blue-50 dark:bg-blue-900/20",
      red: "from-red-500 to-red-600 border-red-500/20 bg-red-50 dark:bg-red-900/20",
      green: "from-green-500 to-green-600 border-green-500/20 bg-green-50 dark:bg-green-900/20",
      purple: "from-purple-500 to-purple-600 border-purple-500/20 bg-purple-50 dark:bg-purple-900/20",
      yellow: "from-yellow-500 to-yellow-600 border-yellow-500/20 bg-yellow-50 dark:bg-yellow-900/20"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise across multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${getColorClasses(cert.color)} backdrop-blur-sm`}>
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(cert.color).split(' ')[0]} ${getColorClasses(cert.color).split(' ')[1]} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <cert.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {cert.issuer}
                </p>
                
                <Badge variant="secondary" className="text-xs">
                  {cert.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Training Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
              <Users className="h-6 w-6" />
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Committed to staying current with emerging technologies and industry best practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6+</div>
              <div className="font-medium text-gray-900 dark:text-white">Professional Certifications</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Industry-recognized credentials</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100+</div>
              <div className="font-medium text-gray-900 dark:text-white">Hours of Training</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Continuous skill development</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
              <div className="font-medium text-gray-900 dark:text-white">Technology Domains</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Cross-functional expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
