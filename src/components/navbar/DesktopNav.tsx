
import { Link, useLocation } from 'react-router-dom';
import { Building, Phone } from 'lucide-react';
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
import { navLinks, NavLinkItem } from './NavLinks';

interface DesktopNavProps {
  isActive: (path: string) => boolean;
  handleNavigation: () => void;
}

const DesktopNav = ({ isActive, handleNavigation }: DesktopNavProps) => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map((link: NavLinkItem) => (
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
    </>
  );
};

export default DesktopNav;
