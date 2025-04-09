
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  personalData: {
    name: string;
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

const Header = ({ personalData }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-theme-purple">
          {personalData.name.split(' ')[0]}<span className="text-theme-pink">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-theme-purple transition-colors">About</a>
          <a href="#experience" className="text-gray-700 hover:text-theme-purple transition-colors">Experience</a>
          <a href="#projects" className="text-gray-700 hover:text-theme-purple transition-colors">Projects</a>
          <a href="#education" className="text-gray-700 hover:text-theme-purple transition-colors">Education</a>
          <a href="#contact" className="text-gray-700 hover:text-theme-purple transition-colors">Contact</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-3">
          {personalData.github && (
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-theme-purple transition-colors">
              <Github size={20} />
            </a>
          )}
          {personalData.linkedin && (
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-theme-purple transition-colors">
              <Linkedin size={20} />
            </a>
          )}
          {personalData.twitter && (
            <a href={personalData.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-theme-purple transition-colors">
              <Twitter size={20} />
            </a>
          )}
          {personalData.email && (
            <a href={`mailto:${personalData.email}`} aria-label="Email" className="hover:text-theme-purple transition-colors">
              <Mail size={20} />
            </a>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-theme-purple transition-colors" onClick={toggleMenu}>About</a>
              <a href="#experience" className="text-gray-700 hover:text-theme-purple transition-colors" onClick={toggleMenu}>Experience</a>
              <a href="#projects" className="text-gray-700 hover:text-theme-purple transition-colors" onClick={toggleMenu}>Projects</a>
              <a href="#education" className="text-gray-700 hover:text-theme-purple transition-colors" onClick={toggleMenu}>Education</a>
              <a href="#contact" className="text-gray-700 hover:text-theme-purple transition-colors" onClick={toggleMenu}>Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-100">
              {personalData.github && (
                <a href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-theme-purple transition-colors">
                  <Github size={20} />
                </a>
              )}
              {personalData.linkedin && (
                <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-theme-purple transition-colors">
                  <Linkedin size={20} />
                </a>
              )}
              {personalData.twitter && (
                <a href={personalData.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-theme-purple transition-colors">
                  <Twitter size={20} />
                </a>
              )}
              {personalData.email && (
                <a href={`mailto:${personalData.email}`} aria-label="Email" className="hover:text-theme-purple transition-colors">
                  <Mail size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
