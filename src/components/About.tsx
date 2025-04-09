
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AboutProps {
  personal: {
    name: string;
    image: string;
    about: string;
    location: string;
  };
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
}

const About = ({ personal, skills }: AboutProps) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-6">
              {personal.about}
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-theme-purple">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((language) => (
                    <Badge key={language} className="bg-theme-yellow text-gray-800 hover:bg-theme-yellow/80">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-theme-purple">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((framework) => (
                    <Badge key={framework} className="bg-theme-teal text-gray-800 hover:bg-theme-teal/80">
                      {framework}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-theme-purple">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool) => (
                    <Badge key={tool} className="bg-theme-pink text-gray-800 hover:bg-theme-pink/80">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="overflow-hidden border-theme-teal/30 shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden bg-theme-yellow/20">
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage src={personal.image} alt={personal.name} />
                    <AvatarFallback className="text-5xl font-bold bg-theme-purple text-white rounded-none w-full h-full">
                      {personal.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="p-6 bg-theme-purple/10">
                  <h3 className="font-semibold text-xl mb-1">{personal.name}</h3>
                  <p className="text-gray-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {personal.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
