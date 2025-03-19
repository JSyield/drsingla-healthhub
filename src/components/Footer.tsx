
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">
              <span className="text-primary">M/s Friends</span> Property
            </h3>
            <p className="text-muted-foreground mb-6">
              Your trusted real estate partner in Panchkula, Haryana. We specialize in
              residential and commercial properties for sale and rent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/properties/all" className="text-muted-foreground hover:text-primary transition-colors">All Properties</Link>
              </li>
              <li>
                <Link to="/properties/sale" className="text-muted-foreground hover:text-primary transition-colors">Properties for Sale</Link>
              </li>
              <li>
                <Link to="/properties/rent" className="text-muted-foreground hover:text-primary transition-colors">Properties for Rent</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Apartments & Flats</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Independent Houses</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Villas & Farmhouses</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Commercial Spaces</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Plots & Land</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <p>SCO 272, Sector-20, Panchkula - 134116, Haryana, India</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <p>+91-8968892466</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <p>friends.properties20@gmail.com</p>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <div>
                  <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} M/s Friends Property Consultants. All rights reserved.
          </p>
          <div className="flex flex-wrap space-x-4 items-center">
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Button asChild variant="outline" size="sm" className="ml-4">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
