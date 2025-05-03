
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">
          Sayed's <span className="text-secondary">Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Button className="btn-primary">
            <a href="#contact">Get In Touch</a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-secondary" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container py-4 flex flex-col space-y-4">
            <NavLinks mobile onClick={toggleMenu} />
            <Button className="btn-primary w-full">
              <a href="#contact" onClick={toggleMenu}>Get In Touch</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false, onClick = () => {} }) => {
  const links = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
  ];

  return links.map((link) => (
    <a
      key={link.name}
      href={link.href}
      className={`${
        mobile ? 'block py-2 text-center' : ''
      } text-secondary hover:text-primary font-medium transition-colors`}
      onClick={onClick}
    >
      {link.name}
    </a>
  ));
};

export default Header;
