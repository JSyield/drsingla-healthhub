
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Building, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Update our navigation links for real estate website
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Properties', path: '#', hasDropdown: true, dropdownItems: [
    { name: 'All Properties', path: '/properties/all' },
    { name: 'For Sale', path: '/properties/sale' },
    { name: 'For Rent', path: '/properties/rent' },
  ]},
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/"
          className="text-xl font-serif font-bold tracking-tight"
          onClick={handleNavigation}
        >
          <span className="text-primary">M/s Friends</span> Property
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuTrigger className={cn(
                      'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                      isActive(link.path) && 'text-primary'
                    )}>
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-2">
                        {link.dropdownItems?.map((item) => (
                          <li key={item.path}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.path}
                                className={cn(
                                  'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                  isActive(item.path) && 'bg-accent text-accent-foreground'
                                )}
                                onClick={handleNavigation}
                              >
                                <div className="text-sm font-medium leading-none">{item.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.name}>
                    <Link
                      to={link.path}
                      className={cn(
                        'px-3 py-2 text-sm font-medium rounded-md transition-colors inline-block',
                        'hover:bg-secondary hover:text-primary',
                        isActive(link.path) && 'text-primary'
                      )}
                      onClick={handleNavigation}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex items-center space-x-2">
          <Button asChild variant="ghost" className="gap-2">
            <a href="tel:+918968892466">
              <Phone className="h-4 w-4" />
              <span>+91-8968892466</span>
            </a>
          </Button>
          <Button asChild className="bg-primary text-white hover:bg-primary/90">
            <Link to="/properties/all">
              <Building className="h-4 w-4 mr-2" />
              View Properties
            </Link>
          </Button>
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
        <nav className="flex flex-col space-y-1">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div key={link.name} className="py-2">
                <div className="flex items-center justify-between px-4 py-2 font-medium">
                  <span>{link.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="ml-4 pl-2 border-l border-border">
                  {link.dropdownItems?.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md transition-colors"
                      onClick={handleNavigation}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-3 text-foreground hover:bg-secondary rounded-md transition-colors"
                onClick={handleNavigation}
              >
                {link.name}
              </Link>
            )
          ))}
          
          <div className="pt-4 mt-4 border-t border-border">
            <Button asChild variant="outline" className="w-full mb-2 justify-start gap-2">
              <a href="tel:+918968892466">
                <Phone className="h-4 w-4" />
                +91-8968892466
              </a>
            </Button>
            <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 justify-start gap-2">
              <Link to="/properties/all" onClick={handleNavigation}>
                <Building className="h-4 w-4" />
                View Properties
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
