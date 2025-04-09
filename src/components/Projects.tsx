
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  sourceCode: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden border-theme-teal/30 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden bg-theme-yellow/20 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-theme-purple/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex gap-4">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-theme-pink transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.sourceCode && (
                      <a 
                        href={project.sourceCode} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-theme-pink transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-3 text-theme-purple">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      className="bg-theme-teal/30 text-gray-800 hover:bg-theme-teal/40"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between gap-4 pt-2 pb-6">
                {project.liveLink && (
                  <Button 
                    variant="outline" 
                    className="flex-1 border-theme-purple text-theme-purple hover:bg-theme-purple/10"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                )}
                {project.sourceCode && (
                  <Button 
                    variant="outline"
                    className="flex-1 border-theme-purple text-theme-purple hover:bg-theme-purple/10"
                    onClick={() => window.open(project.sourceCode, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Source Code
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
