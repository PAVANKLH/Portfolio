
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      degree: "M.Tech in Artificial Intelligence",
      institution: "CVR College of Engineering",
      period: "2023 - 2025 (Expected)",
      location: "Hyderabad, India",
      status: "current",
      description: "Advanced studies in AI/ML, Deep Learning, Natural Language Processing, and Computer Vision",
      highlights: ["Financial Forecasting Project", "Research in Gen AI", "Advanced ML Algorithms"]
    },
    {
      degree: "B.Tech in Cybersecurity",
      institution: "KL University",
      period: "2019 - 2023",
      location: "Guntur, India",
      status: "completed",
      description: "Comprehensive cybersecurity education covering network security, ethical hacking, and digital forensics",
      highlights: ["Cybersecurity Capstone Project", "Ethical Hacking Certification", "Network Security Specialization"]
    },
    {
      degree: "Intermediate (12th)",
      institution: "Narayana IIT Academy",
      period: "2017 - 2019",
      location: "Andhra Pradesh, India",
      status: "completed",
      description: "Pre-engineering foundation with focus on Mathematics, Physics, and Chemistry",
      highlights: ["Strong Mathematical Foundation", "Science Olympiad Participation", "Academic Excellence"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Educational Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A progressive academic path from foundational sciences to specialized AI and cybersecurity expertise
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < education.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>
              )}
              
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/20 relative overflow-hidden">
                {/* Status Badge */}
                {edu.status === 'current' && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 hover:bg-green-600 text-white">
                      In Progress
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <GraduationCap className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <div className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                          {edu.institution}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          Key Highlights
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Academic Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6+</div>
            <div className="font-medium text-gray-900 dark:text-white">Years of Study</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Continuous academic excellence</div>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl border border-purple-200 dark:border-purple-800">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2</div>
            <div className="font-medium text-gray-900 dark:text-white">Specialized Degrees</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">AI & Cybersecurity focus</div>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl border border-green-200 dark:border-green-800">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
            <div className="font-medium text-gray-900 dark:text-white">Major Projects</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Practical application focus</div>
          </div>
        </div>
      </div>
    </section>
  );
};
