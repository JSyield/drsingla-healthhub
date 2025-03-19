
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  delay?: number;
}

const services = [
  {
    title: "Allergy Testing",
    description: "Comprehensive testing to identify specific allergens triggering respiratory symptoms.",
    icon: "🔬",
    link: "/procedures/allergy-testing"
  },
  {
    title: "Bronchoscopy",
    description: "Advanced visualization of the airways using a bronchoscope for diagnosis and treatment.",
    icon: "🔎",
    link: "/procedures/bronchoscopy"
  },
  {
    title: "Thoracoscopy",
    description: "Minimally invasive approach to inspect pleural space for accurate diagnosis and treatment.",
    icon: "🩺",
    link: "/procedures/thoracoscopy"
  },
  {
    title: "Pulmonary Function Testing",
    description: "Detailed assessment of lung capacity, air flow, and oxygen exchange.",
    icon: "📊",
    link: "/procedures/pulmonary-function-testing"
  },
  {
    title: "Sleep Disorder Treatment",
    description: "Specialized care for conditions like sleep apnea, insomnia, and narcolepsy.",
    icon: "💤",
    link: "/treatments/sleep-disorders"
  },
  {
    title: "Asthma Management",
    description: "Personalized treatment plans to control symptoms and improve quality of life.",
    icon: "🫁",
    link: "/treatments/asthma"
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
            <div className="h-12 w-12 flex items-center justify-center text-2xl rounded-lg bg-medical-light mb-3">
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
          <a 
            href={link} 
            className="text-sm font-medium text-primary inline-flex items-center link-underline"
          >
            Learn more
          </a>
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
          <h2 className="section-title">Advanced Procedures & Treatments</h2>
          <p className="section-subtitle">
            Specialized care using the latest medical advancements for respiratory and sleep disorders,
            tailored to each patient's unique needs.
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
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
            View All Services
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
