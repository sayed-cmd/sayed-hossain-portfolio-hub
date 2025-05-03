
import { ChartBar, Database, Target, Image, Settings, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Data Visualization & Reporting",
    description: "Transform complex data into clear insights with custom dashboards and reports that drive smart business decisions.",
    icon: <ChartBar />,
  },
  {
    title: "Business Analytics & Statistics",
    description: "Extract meaningful patterns from your data to identify trends, forecast outcomes, and guide strategic planning.",
    icon: <Target />,
  },
  {
    title: "Strategic Planning & Process Optimization",
    description: "Streamline your operations with data-backed strategies that improve efficiency, reduce costs, and boost productivity.",
    icon: <Settings />,
  },
  {
    title: "Automation & File Management",
    description: "Eliminate manual tasks and improve accuracy with custom automation solutions for reporting and data management workflows.",
    icon: <FileText />,
  },
  {
    title: "Database Development",
    description: "Design and implement robust database solutions that organize your data effectively and support reliable reporting.",
    icon: <Database />,
  },
  {
    title: "Administrative Assistance",
    description: "Get professional support for day-to-day operations, ensuring your business runs smoothly while you focus on growth.",
    icon: <Image />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container">
        <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">Services I Offer</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          I provide specialized services that help businesses optimize their operations and 
          leverage data to drive growth and efficiency.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <div 
      className={cn(
        "service-card animate-on-scroll"
      )}
      style={{ '--scroll-delay': index % 3 } as React.CSSProperties}
    >
      <div className="text-primary mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-secondary">{service.title}</h3>
      <p className="text-gray-700">{service.description}</p>
    </div>
  );
};

export default ServicesSection;
