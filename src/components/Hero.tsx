
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          {/* Photo - Centered and smaller */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-2 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-2">
                <img
                  src="/lovable-uploads/d5d6bed1-8286-42ba-beb7-3d416dbe4a01.png"
                  alt="D Pavan - Full Stack Developer"
                  className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Content - Centered */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Hi, I'm D Pavan 👋
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-medium">
                Full Stack Developer | Gen AI Enthusiast
              </p>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                Pega CSA 8.7
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                Azure Fundamentals
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                AI Fundamentals
              </Badge>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Certified Full Stack Software Developer at NxtWave, passionate about building innovative solutions with cutting-edge technologies and helping others learn.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:deloutlook007@gmail.com">
  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
    <Mail className="mr-2 h-4 w-4" />
    Get In Touch
  </Button>
</a>

              {/* <Button variant="outline" className="px-6 py-3 rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button> */}
              <a href="/PResume.pdf" download="D_Pavan_Resume.pdf">
  <Button
    variant="outline"
    className="px-6 py-3 rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
  >
    <Download className="mr-2 h-4 w-4" />
    Download Resume
  </Button>
</a>
            </div>

            {/* Social Links */}
            {/* <div className="flex justify-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                <Mail className="h-5 w-5" />
              </Button>
            </div> */}
            <div className="flex justify-center gap-4">
  {/* GitHub */}
  <a href="https://github.com/PAVANKLH" target="_blank" rel="noopener noreferrer">
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
    >
      <Github className="h-5 w-5" />
    </Button>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/dpavan007" target="_blank" rel="noopener noreferrer">
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
    >
      <Linkedin className="h-5 w-5" />
    </Button>
  </a>

  {/* Email */}
  <a href="mailto:deloutlook007@gmail.com">
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
    >
      <Mail className="h-5 w-5" />
    </Button>
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};
