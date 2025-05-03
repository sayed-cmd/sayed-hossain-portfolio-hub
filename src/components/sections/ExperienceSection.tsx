
import { cn } from '@/lib/utils';
import { Briefcase } from 'lucide-react';

type Experience = {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
};

const experiences: Experience[] = [
  {
    company: "REDX",
    position: "Operations Manager",
    duration: "2021 - Present",
    location: "Dhaka, Bangladesh",
    description: [
      "Lead a team of 15+ staff managing nationwide logistics operations",
      "Implemented data pipelines and dashboards to track KPIs, improving operational efficiency by 25%",
      "Developed automated reporting systems using SQL and Python that reduced reporting time by 80%",
      "Created strategic plans resulting in 15% cost reduction while maintaining service quality"
    ],
    skills: ["Operations Management", "SQL", "Data Analysis", "Team Leadership"],
  },
  {
    company: "Al Zamzam",
    position: "Data Reporting Specialist",
    duration: "2018 - 2021",
    location: "Dhaka, Bangladesh",
    description: [
      "Built comprehensive reporting systems for business metrics across 5 departments",
      "Automated daily and weekly reports using Google Sheets and Apps Script",
      "Trained team members on data analysis methodologies, improving team capability by 40%",
      "Collaborated with IT to implement new CRM system that streamlined customer data management",
    ],
    skills: ["Data Reporting", "Google Sheets", "Process Automation", "CRM Systems"],
  },
  {
    company: "Firoz Chemicals",
    position: "Administrative Assistant",
    duration: "2016 - 2018",
    location: "Dhaka, Bangladesh",
    description: [
      "Managed office operations and coordinated with multiple departments",
      "Created Excel templates that improved inventory tracking accuracy by 35%",
      "Assisted in developing documentation systems for regulatory compliance",
      "Supported the management team in data collection and presentation for board meetings"
    ],
    skills: ["Excel", "Office Administration", "Documentation", "Data Collection"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-accent">
      <div className="container">
        <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">Work Experience</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          My professional journey spans multiple roles where I've consistently delivered results
          through data-driven operations management and process optimization.
        </p>
        
        <div className="flex flex-col gap-6 mt-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  return (
    <div 
      className={cn(
        "experience-card animate-on-scroll"
      )}
      style={{ '--scroll-delay': index } as React.CSSProperties}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <div className="bg-primary/10 p-2 rounded-full inline-block">
          <Briefcase className="text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-secondary">{experience.position}</h3>
          <p className="text-primary font-medium">{experience.company}</p>
        </div>
        <div className="md:ml-auto text-gray-600 text-sm">
          <p>{experience.duration}</p>
          <p>{experience.location}</p>
        </div>
      </div>
      
      <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
        {experience.description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {experience.skills.map((skill, idx) => (
          <span 
            key={idx} 
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
