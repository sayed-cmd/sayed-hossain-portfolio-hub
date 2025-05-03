
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-16 pb-24 bg-gradient-to-br from-accent to-white">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 animate-fade-in" style={{ '--scroll-delay': 0 } as React.CSSProperties}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-secondary leading-tight">
              Hi, I'm <span className="text-primary">Md. Sayed Hossain</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-secondary opacity-90">
              I help businesses streamline operations & unlock data-driven insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="btn-primary">
                <a href="#contact">Let's Connect</a>
              </Button>
              <Button asChild className="btn-outline">
                <a href="/cv.pdf" download>
                  <Download size={18} />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center animate-fade-in" style={{ '--scroll-delay': 2 } as React.CSSProperties}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary shadow-xl">
              <img 
                src="/lovable-uploads/9f2beb7d-6a0a-4b0c-9f2e-0a21fdb22643.png" 
                alt="Md. Sayed Hossain" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
