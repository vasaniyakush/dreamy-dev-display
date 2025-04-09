
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

interface ContactProps {
  personal: {
    name: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
  };
}

const Contact = ({ personal }: ContactProps) => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm currently open to new opportunities. If you have a project you'd like to discuss or just want to say hello, feel free to reach out!
            </p>
            
            <div className="space-y-4">
              {personal.email && (
                <div className="flex items-start">
                  <div className="p-2 bg-theme-yellow/30 rounded-full mr-4">
                    <Mail size={20} className="text-theme-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a 
                      href={`mailto:${personal.email}`} 
                      className="text-theme-purple hover:underline"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
              )}
              
              {personal.location && (
                <div className="flex items-start">
                  <div className="p-2 bg-theme-pink/30 rounded-full mr-4">
                    <MapPin size={20} className="text-theme-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-700">{personal.location}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                {personal.github && (
                  <a 
                    href={personal.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-theme-purple text-white rounded-full hover:bg-theme-purple/80 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                )}
                {personal.linkedin && (
                  <a 
                    href={personal.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-theme-purple text-white rounded-full hover:bg-theme-purple/80 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {personal.twitter && (
                  <a 
                    href={personal.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-theme-purple text-white rounded-full hover:bg-theme-purple/80 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <Card className="border-theme-teal/30">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-6 text-theme-purple">Send me a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-purple/50 focus:border-theme-purple/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-purple/50 focus:border-theme-purple/50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-purple/50 focus:border-theme-purple/50"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-purple/50 focus:border-theme-purple/50"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full bg-theme-purple hover:bg-theme-purple/90 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
