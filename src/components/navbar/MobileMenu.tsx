
import { Link } from 'react-router-dom';
import { Building, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navLinks, NavLinkItem } from './NavLinks';

interface MobileMenuProps {
  isMenuOpen: boolean;
  handleNavigation: () => void;
}

const MobileMenu = ({ isMenuOpen, handleNavigation }: MobileMenuProps) => {
  return (
    <div
      className={cn(
        'fixed inset-0 bg-background/95 backdrop-blur-sm z-40 pt-20 px-4 transition-all duration-300 transform md:hidden overflow-y-auto',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <nav className="flex flex-col space-y-1">
        {navLinks.map((link: NavLinkItem) => (
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
  );
};

export default MobileMenu;
