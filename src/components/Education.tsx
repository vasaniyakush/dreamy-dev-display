
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar } from "lucide-react";

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
  courses: string[];
}

interface EducationProps {
  education: EducationItem[];
}

const Education = ({ education }: EducationProps) => {
  return (
    <section id="education" className="py-20 bg-theme-teal/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-8">
          {education.map((edu) => (
            <Card key={edu.id} className="border-theme-purple/30 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h3 className="font-bold text-lg text-theme-purple">{edu.institution}</h3>
                    <p className="text-gray-700 font-medium">{edu.degree}</p>
                    <div className="flex items-center mt-2 text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.startDate} - {edu.endDate}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 md:border-l border-gray-200 md:pl-6">
                    <p className="text-gray-700 mb-4">{edu.description}</p>
                    {edu.courses.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <BookOpen size={16} className="mr-2" />
                          Key Courses
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                          {edu.courses.map((course, index) => (
                            <li key={index} className="text-gray-700">
                              • {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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

export default Education;
