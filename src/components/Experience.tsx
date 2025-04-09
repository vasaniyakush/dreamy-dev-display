
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon } from "lucide-react";

interface ExperienceItem {
  id: number;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

const formatDate = (dateString: string): string => {
  if (dateString === 'Present') return dateString;
  
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
};

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section id="experience" className="py-20 bg-theme-yellow/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-8">
          {experience.map((job, index) => (
            <Card 
              key={job.id} 
              className="border-l-4 border-l-theme-purple hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="p-6 md:border-r border-gray-100 bg-white">
                    <div className="mb-4">
                      <h3 className="font-bold text-lg text-theme-purple">{job.company}</h3>
                      <p className="text-gray-700 font-medium">{job.title}</p>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <CalendarIcon size={16} className="mr-2" />
                      <span>
                        {formatDate(job.startDate)} - {formatDate(job.endDate)}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <MapPinIcon size={16} className="mr-2" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 md:col-span-3 bg-white">
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline" 
                          className="border-theme-teal text-gray-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
