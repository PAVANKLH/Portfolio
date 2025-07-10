
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C", "SQL", "HTML/CSS"],
      color: "blue"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Tailwind CSS", "Streamlit", "LangChain", "React", "Node.js"],
      color: "green"
    },
    {
      title: "Tools & Technologies",
      skills: ["MCP Servers", "N8N", "Claude AI", "GitHub", "Kali Linux", "Docker"],
      color: "purple"
    },
    {
      title: "Specializations",
      skills: ["Pega System Architect", "Microsoft Azure", "Gen AI", "RAG", "ML/AI"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      green: "from-green-500 to-green-600 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      purple: "from-purple-500 to-purple-600 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      pink: "from-pink-500 to-pink-600 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and AI-powered solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className={`text-xs hover:scale-105 transition-transform duration-200 ${getColorClasses(category.color)}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight Certifications */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div className="text-2xl">🏆</div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Key Certifications</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Certified Pega System Architect • Microsoft Azure Certified • Aviatrix Certified
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
