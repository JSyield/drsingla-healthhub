
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative pt-20 min-h-[90vh] flex items-center overflow-hidden bg-hero-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-primary/10 z-0"></div>
      
      <div className="section-container relative z-10 flex flex-col md:flex-row items-center">
        <div className="flex-1 md:pr-12 mb-8 md:mb-0">
          <AnimatedSection>
            <div className="chip mb-4">Trusted Property Consultants</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
              <span className="text-primary block">M/s Friends</span>
              <span className="text-foreground">Property Consultants</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              Your reliable partner for all real estate needs in Panchkula, Haryana. We help you find the perfect property that matches your lifestyle and investment goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white text-sm md:text-base px-6 py-6">
                <Link to="/properties/sale">Properties for Sale</Link>
              </Button>
              <Button asChild variant="outline" className="flex items-center gap-2 text-sm md:text-base px-6 py-6">
                <Link to="/properties/rent">
                  Properties for Rent <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="flex-1 relative w-full md:w-auto">
          <AnimatedSection animation="fade-in" delay={300} className="relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] bg-cover bg-center animate-image-shimmer"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-2xl border border-primary/10 bg-primary/5"></div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
