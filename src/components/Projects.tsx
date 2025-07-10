
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Github, ExternalLink, TrendingUp, Bot, Cog, Dumbbell, MapPin } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Financial Forecasting (Stock & Crypto)",
      description: "CVR Project using ML, Sentiment Analysis for NIFTY50, Bitcoin predictions",
      icon: TrendingUp,
      technologies: ["Python", "ML", "Sentiment Analysis", "NIFTY50", "Bitcoin"],
      details: "A comprehensive financial forecasting system that combines machine learning algorithms with sentiment analysis to predict stock and cryptocurrency trends. The project analyzes NIFTY50 stocks and Bitcoin price movements using historical data and market sentiment indicators.",
      features: [
        "Real-time market data integration",
        "Sentiment analysis from financial news",
        "Machine learning prediction models",
        "Interactive dashboard for visualization"
      ],
      color: "blue"
    },
    {
      id: 2,
      title: "Pro Kabaddi Auction Chatbot with RAG & N8N",
      description: "JSON/CSV-powered custom chatbot using RAG technology",
      icon: Bot,
      technologies: ["RAG", "N8N", "JSON", "CSV", "NLP", "Chatbot"],
      details: "An intelligent chatbot system designed for Pro Kabaddi auction data analysis. Uses Retrieval-Augmented Generation (RAG) to provide accurate information about players, teams, and auction statistics from structured data sources.",
      features: [
        "RAG-powered responses",
        "N8N workflow automation",
        "Multi-format data processing",
        "Real-time auction insights"
      ],
      color: "green"
    },
    {
      id: 3,
      title: "MCP Automation Project",
      description: "Emailing, YouTube posting, Drive uploads via MCP + Claude + ChatGPT",
      icon: Cog,
      technologies: ["MCP", "Claude", "ChatGPT", "YouTube API", "Google Drive", "Automation"],
      details: "A comprehensive automation system leveraging Model Context Protocol (MCP) to integrate various services. Automates content creation, distribution, and file management across multiple platforms using AI assistants.",
      features: [
        "Multi-platform automation",
        "AI-powered content generation",
        "Seamless API integrations",
        "Workflow orchestration"
      ],
      color: "purple"
    },
    {
      id: 4,
      title: "Gen AI Gym Fit Life",
      description: "Personalized AI-driven fitness planner with admin/user login, AI workout generation",
      icon: Dumbbell,
      technologies: ["Gen AI", "React", "Node.js", "AI Fitness", "User Management"],
      details: "A personalized fitness application that uses generative AI to create custom workout plans and nutrition advice. Features separate admin and user interfaces with comprehensive fitness tracking capabilities.",
      features: [
        "AI-generated workout plans",
        "Personalized nutrition advice",
        "Progress tracking dashboard",
        "Admin panel for management"
      ],
      color: "pink"
    },
    {
      id: 5,
      title: "Weekend Planner (LangChain + Groq + Streamlit)",
      description: "Smart local travel recommender using AI",
      icon: MapPin,
      technologies: ["LangChain", "Groq", "Streamlit", "Travel AI", "Recommendations"],
      details: "An intelligent weekend planning application that provides personalized local travel recommendations. Uses LangChain for natural language processing and Groq for fast inference, all wrapped in a user-friendly Streamlit interface.",
      features: [
        "AI-powered recommendations",
        "Local attraction discovery",
        "Weather integration",
        "Budget-friendly options"
      ],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-100 dark:bg-blue-900",
      green: "from-green-500 to-green-600 bg-green-100 dark:bg-green-900",
      purple: "from-purple-500 to-purple-600 bg-purple-100 dark:bg-purple-900",
      pink: "from-pink-500 to-pink-600 bg-pink-100 dark:bg-pink-900",
      indigo: "from-indigo-500 to-indigo-600 bg-indigo-100 dark:bg-indigo-900"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Innovative solutions combining AI, automation, and modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(project.color)} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-3">
                          <div className={`w-8 h-8 bg-gradient-to-r ${getColorClasses(project.color)} rounded-lg flex items-center justify-center`}>
                            <project.icon className="h-4 w-4 text-white" />
                          </div>
                          {project.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <p className="text-gray-600 dark:text-gray-400">
                          {project.details}
                        </p>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div className="text-2xl">🚀</div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Let's Collaborate!</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Interested in working together? Let's build something amazing!
              </p>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
