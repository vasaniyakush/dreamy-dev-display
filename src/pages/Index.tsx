
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import portfolioData from "../data.json";

const Index = () => {
  const [data, setData] = useState(portfolioData);
  
  // In a real application, you would fetch this data from an API
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/portfolio-data');
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching portfolio data:', error);
  //     }
  //   };
  //
  //   fetchData();
  // }, []);

  return (
    <div className="min-h-screen">
      <Header personalData={data.personal} />
      
      <main>
        <Hero personal={data.personal} />
        
        <ScrollAnimation>
          <About personal={data.personal} skills={data.skills} />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <Experience experience={data.experience} />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <Projects projects={data.projects} />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <Education education={data.education} />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <Contact personal={data.personal} />
        </ScrollAnimation>
      </main>
      
      <Footer personalName={data.personal.name} />
    </div>
  );
};

export default Index;
