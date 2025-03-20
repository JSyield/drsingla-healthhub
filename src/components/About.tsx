
import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';

const achievements = [
  "Over 10 years of experience in Panchkula real estate market",
  "Successfully completed 500+ property transactions",
  "Top-rated real estate consultancy in Haryana region",
  "Expert team of property consultants and legal advisors",
  "Comprehensive network of property listings in all major sectors"
];

const About = () => {
  return (
    <section className="section-container" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimatedSection animation="fade-in" className="order-2 md:order-1">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80')] bg-cover bg-center animate-image-shimmer"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full border border-primary/20 bg-primary/5 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full border border-primary/20 bg-primary/10 -z-10"></div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="order-1 md:order-2">
          <div className="chip mb-4">About Us</div>
          <h2 className="section-title">Your Trusted Property Partner</h2>
          <p className="text-muted-foreground mb-6">
            At M/s Friends Property Consultants, we specialize in providing comprehensive real estate 
            solutions in Panchkula and surrounding areas. Founded by Mr. Sandeep Gupta, our consultancy 
            has established itself as a reliable partner for all your property needs.
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Our Achievements</h3>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="slide-in-right" 
                  delay={index * 100} 
                  className="flex items-start"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-muted-foreground">{achievement}</span>
                </AnimatedSection>
              ))}
            </ul>
          </div>
          
          <p className="text-muted-foreground">
            Our client-centered approach involves thorough understanding of your requirements, 
            clear communication, and personalized property recommendations that address your 
            unique needs and preferences.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
