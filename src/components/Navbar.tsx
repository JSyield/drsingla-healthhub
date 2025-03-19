
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Update our navigation links to include hash links for single-page navigation
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Services', path: '/#services' },
  { name: 'Contact', path: '/#contact' },
  { name: 'Procedures', path: '/procedures' },
  { name: 'Treatments', path: '/treatments' },
  { name: 'Complaints', path: '/complaints' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Blog', path: '/blog' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  const handleNavigation = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/"
          className="text-xl font-serif font-bold tracking-tight"
          onClick={handleNavigation}
        >
          <span className="text-primary">Dr. Karan</span> Singla
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                'hover:bg-secondary hover:text-primary'
              )}
              onClick={handleNavigation}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button className="bg-primary text-white hover:bg-primary/90">
              <Phone className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-sm z-40 pt-20 px-4 transition-all duration-300 transform md:hidden overflow-y-auto',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="px-4 py-3 text-foreground hover:bg-secondary rounded-md transition-colors"
              onClick={handleNavigation}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-6">
            <a href="#contact" onClick={handleNavigation}>
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                <Phone className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
