
import { Database, Code, Globe, Users, Brain, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  bgColor: string;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Data & Reporting",
    icon: <Database size={28} />,
    skills: ["SQL", "BigQuery", "Power Query", "Python", "Data Visualization", "Excel Advanced"],
    bgColor: "bg-blue-50",
  },
  {
    title: "Automation Tools",
    icon: <Code size={28} />,
    skills: ["Google Sheets Scripting", "Excel Automation", "Power Automate", "Task Scheduling", "Reporting Automation"],
    bgColor: "bg-green-50",
  },
  {
    title: "Tech Knowledge",
    icon: <Globe size={28} />,
    skills: ["AI Tools", "WordPress", "Digital Marketing", "CRM Systems", "Cloud Services", "Office 365"],
    bgColor: "bg-purple-50",
  },
  {
    title: "Soft Skills",
    icon: <Users size={28} />,
    skills: ["Team Leadership", "Problem-Solving", "Strategic Thinking", "Communication", "Project Management"],
    bgColor: "bg-amber-50",
  },
  {
    title: "Business Analysis",
    icon: <Brain size={28} />,
    skills: ["Process Optimization", "Business Analytics", "Strategic Planning", "Risk Assessment", "Resource Planning"],
    bgColor: "bg-rose-50",
  },
  {
    title: "Management",
    icon: <Target size={28} />,
    skills: ["Operations Management", "Team Coordination", "KPI Tracking", "Stakeholder Management", "Cross-functional Leadership"],
    bgColor: "bg-cyan-50",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-accent">
      <div className="container">
        <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">My Skills</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          I've developed a diverse set of skills that allow me to drive operational excellence and 
          deliver data-driven insights that power business decisions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  return (
    <div 
      className={cn(
        "skill-card animate-on-scroll", 
        category.bgColor
      )}
      style={{ '--scroll-delay': index % 3 } as React.CSSProperties}
    >
      <div className="flex items-center mb-4 text-primary">
        {category.icon}
        <h3 className="text-xl font-bold ml-2">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, idx) => (
          <span 
            key={idx} 
            className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
