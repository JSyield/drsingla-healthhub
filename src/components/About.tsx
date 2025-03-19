
import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';

const credentials = [
  "MBBS from Baba Farid University, Faridkot, Punjab",
  "MD in Pulmonary and Sleep Medicine from MGM Medical College, New Bombay",
  "DNB in Pulmonary Medicine from the National Board, New Delhi",
  "Specialized training in Interventional Pulmonology",
  "Multiple publications in reputed medical journals"
];

const About = () => {
  return (
    <section className="section-container" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimatedSection animation="fade-in" className="order-2 md:order-1">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80')] bg-cover bg-center animate-image-shimmer"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full border border-primary/20 bg-medical-light/10 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full border border-primary/20 bg-medical-light/20 -z-10"></div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="order-1 md:order-2">
          <div className="chip mb-4">About Dr. Singla</div>
          <h2 className="section-title">Expert Care with a Personal Touch</h2>
          <p className="text-muted-foreground mb-6">
            As a dedicated pulmonologist with over 5 years of specialized experience, 
            Dr. Karan Singla combines expert medical knowledge with a compassionate approach to patient care. 
            His practice focuses on diagnosing and treating a wide range of respiratory and sleep disorders.
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Professional Credentials</h3>
            <ul className="space-y-3">
              {credentials.map((credential, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="slide-in-right" 
                  delay={index * 100} 
                  className="flex items-start"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-muted-foreground">{credential}</span>
                </AnimatedSection>
              ))}
            </ul>
          </div>
          
          <p className="text-muted-foreground">
            Dr. Singla's patient-centered approach involves thorough evaluation, 
            clear communication, and personalized treatment plans that address each 
            patient's unique health needs and concerns.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
