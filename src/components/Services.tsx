
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  delay?: number;
}

const services = [
  {
    title: "Property Sales",
    description: "Find your dream home from our extensive portfolio of residential and commercial properties for sale.",
    icon: "🏘️",
    link: "/properties/sale"
  },
  {
    title: "Rental Properties",
    description: "Discover quality rental properties that match your lifestyle and budget requirements.",
    icon: "🔑",
    link: "/properties/rent"
  },
  {
    title: "Property Valuation",
    description: "Get accurate market value assessment for your property with our expert valuation services.",
    icon: "📊",
    link: "/contact"
  },
  {
    title: "Investment Consulting",
    description: "Professional advice on real estate investments to maximize your returns and minimize risks.",
    icon: "💰",
    link: "/contact"
  },
  {
    title: "Legal Assistance",
    description: "Guidance through the legal aspects of property transactions, ensuring compliance with all regulations.",
    icon: "⚖️",
    link: "/contact"
  },
  {
    title: "Property Management",
    description: "Comprehensive property management services to maintain and enhance the value of your real estate assets.",
    icon: "🏢",
    link: "/contact"
  }
];

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon, link, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <AnimatedSection animation="fade-in-up" delay={delay}>
      <Card 
        className={cn(
          "group h-full transition-all duration-300 hover:shadow-md overflow-hidden border bg-card",
          "hover:border-primary/20 hover:-translate-y-1"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div className="h-12 w-12 flex items-center justify-center text-2xl rounded-lg bg-primary/10 mb-3">
              {icon}
            </div>
            <ArrowUpRight className={cn(
              "h-5 w-5 text-primary transition-all duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )} />
          </div>
          <CardTitle className="text-xl font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm text-muted-foreground mb-4">
            {description}
          </CardDescription>
          <Link 
            to={link} 
            className="text-sm font-medium text-primary inline-flex items-center link-underline"
          >
            Learn more
          </Link>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

const Services = () => {
  return (
    <section className="section-container" id="services">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <AnimatedSection>
          <div className="chip mb-4">Our Services</div>
          <h2 className="section-title">Comprehensive Real Estate Solutions</h2>
          <p className="section-subtitle">
            We offer a wide range of real estate services tailored to meet your specific needs,
            whether you're buying, selling, or investing in property.
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            link={service.link}
            delay={index * 100}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <AnimatedSection animation="fade-in" delay={600}>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
            <Link to="/properties/all">View All Properties</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
