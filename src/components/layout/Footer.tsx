
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Md. Sayed Hossain</h3>
            <p className="mb-4">
              3PL Operations Manager, Data analysis Specialist with expertise in logistics,
              business analytics and process optimization.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/sayed-hossain" />
              <SocialLink icon={<Github size={20} />} href="https://github.com/sayed-cmd" />
              <SocialLink icon={<Mail size={20} />} href="saiedhossain76@gmail.com" />
              <SocialLink icon={<Phone size={20} />} href="tel:+8801738011330" />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">About Me</FooterLink>
              <FooterLink href="#skills">Skills</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#experience">Experience</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <address className="not-italic">
              <p className="mb-2">Dhaka, Bangladesh</p>
              <p className="mb-2">Email: saiedhossain76@gmail.com </p>
              <p className="mb-2">Phone: +8801738011330 </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/20 text-center">
          <p>&copy; {currentYear} Md. Sayed Hossain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }) => (
  <a
    href={href}
    className="bg-white/20 p-2 rounded-full hover:bg-primary transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="hover:text-primary-light transition-colors">
      {children}
    </a>
  </li>
);

export default Footer;
