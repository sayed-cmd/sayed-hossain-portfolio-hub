
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container">
        <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
          <div className="md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
              alt="Md. Sayed Hossain working" 
              className="rounded-lg shadow-lg w-full object-cover h-[400px]"
            />
          </div>
          
          <div className="md:w-3/5">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Operations Manager & Data Reporting Specialist
            </h3>
            
            <p className="mb-4 text-gray-700">
              With over 5 years of experience in logistics operations and data analysis, I specialize in 
              transforming complex data into actionable business insights. My expertise spans across strategic 
              planning, process optimization, and team leadership in fast-paced environments.
            </p>
            
            <p className="mb-6 text-gray-700">
              I'm passionate about leveraging technology—particularly SQL, Python, and automation tools—to 
              streamline operations and drive efficiency. Throughout my career at companies like REDX and Al Zamzam,
              I've successfully implemented data-driven solutions that have improved operational performance and 
              decision-making processes.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <InfoItem label="Experience" value="5+ Years" />
              <InfoItem label="Location" value="Dhaka, Bangladesh" />
              <InfoItem label="Email" value="contact@sayedhossain.com" />
              <InfoItem label="Availability" value="Full-time / Consulting" />
            </div>
            
            <Button asChild className="btn-primary">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <h4 className="font-bold text-secondary">{label}:</h4>
    <p className="text-gray-700">{value}</p>
  </div>
);

export default AboutSection;
