
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

interface HeroProps {
  personal: {
    name: string;
    title: string;
    description: string;
  };
}

const Hero = ({ personal }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-theme-yellow/30 to-theme-teal/30 pt-20">
      <div className="container mx-auto px-4">
        <div className="lg:max-w-3xl">
          <p className="text-theme-purple font-medium mb-4 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn" style={{animationDelay: '0.4s'}}>
            {personal.name}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-700 mb-6 animate-fadeIn" style={{animationDelay: '0.6s'}}>
            {personal.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl animate-fadeIn" style={{animationDelay: '0.8s'}}>
            {personal.description}
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeIn" style={{animationDelay: '1s'}}>
            <Button 
              className="bg-theme-purple hover:bg-theme-purple/90 text-white"
              size="lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-theme-purple text-theme-purple hover:bg-theme-purple/10"
              size="lg"
              onClick={() => window.open('/placeholder.svg', '_blank')}
            >
              Resume
            </Button>
          </div>
          
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 mx-auto mt-20 rounded-full bg-theme-pink/20 text-theme-purple hover:bg-theme-pink/40 transition-colors animate-fadeIn absolute bottom-10 left-1/2 transform -translate-x-1/2"
            style={{animationDelay: '1.2s'}}
            aria-label="Scroll down"
          >
            <ArrowDownIcon size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
