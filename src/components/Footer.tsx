
import { ArrowUpIcon } from "lucide-react";

interface FooterProps {
  personalName: string;
}

const Footer = ({ personalName }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-theme-purple text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {currentYear} {personalName}. All rights reserved.</p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUpIcon size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
