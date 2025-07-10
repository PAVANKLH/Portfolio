
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Shield, Code, Lightbulb } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Master's in AI, passionate about Gen AI and ML"
    },
    {
      icon: Shield,
      title: "Security Expert",
      description: "B.Tech in Cybersecurity with hands-on experience"
    },
    {
      icon: Code,
      title: "Full Stack Dev",
      description: "Certified developer at NxtWave with mentoring skills"
    },
    {
      icon: Lightbulb,
      title: "Tech Simplifier",
      description: "Love making complex technology accessible to all"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm currently pursuing my Master's in AI at CVR College, with a B.Tech in Cybersecurity from KL University. 
              I'm passionate about simplifying complex tech, helping others learn, and building real-world solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              As a Full Stack Developer at NxtWave, I combine my technical expertise with a passion for mentoring, 
              helping aspiring developers navigate the world of modern web development and AI technologies.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">6+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
