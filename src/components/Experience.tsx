
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Code } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer / SDM",
      company: "NxtWave",
      period: "2025 - Present",
      location: "Remote",
      description: "Leading full-stack development initiatives and mentoring aspiring developers in modern web technologies and AI integration.",
      responsibilities: [
        "Mentoring students in full-stack development",
        "Building scalable web applications",
        "Backend and frontend architecture design",
        "Implementing AI-powered solutions"
      ],
      technologies: ["React", "Node.js", "Python", "AI/ML", "Database Design"],
      current: true
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300">
              {exp.current && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white">
                    Current
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Experience Highlight */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Real-world Technology Usage
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Extensive hands-on experience with cutting-edge technologies including:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              LangChain & RAG Systems
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              MCP Server Architecture
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              AI Tool Integration
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              Cloud Solutions (Azure)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
