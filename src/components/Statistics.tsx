
import { useState, useEffect, useRef } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';

interface StatProps {
  number: number;
  title: string;
  suffix?: string;
  delay?: number;
}

const StatCard = ({ number, title, suffix = '', delay = 0 }: StatProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = number;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => {
      clearInterval(timer);
    };
  }, [isVisible, number]);

  return (
    <AnimatedSection 
      animation="fade-in-up" 
      delay={delay} 
      className="glass-card p-6 md:p-8 text-center flex flex-col items-center"
    >
      <div className="text-3xl md:text-4xl font-bold font-serif mb-3 text-primary flex items-baseline">
        <span ref={countRef}>{count}</span>
        <span className="text-medical-dark ml-1">{suffix}</span>
      </div>
      <div className="text-sm md:text-base text-muted-foreground">{title}</div>
    </AnimatedSection>
  );
};

const Statistics = () => {
  return (
    <section className={cn("py-16 bg-gradient-to-b from-white to-medical-light/30")}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimatedSection>
            <div className="chip mb-4">Exceptional Experience</div>
            <h2 className="section-title">Dedicated Years of Expertise</h2>
            <p className="section-subtitle">
              Dr. Karan Singla brings over 5 years of specialized experience in pulmonary
              and sleep medicine, focused on delivering excellent patient outcomes.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <StatCard 
            number={5} 
            title="Years of Experience" 
            suffix="+" 
            delay={100} 
          />
          <StatCard 
            number={5000} 
            title="Pulmonary Function Tests" 
            suffix="+" 
            delay={200} 
          />
          <StatCard 
            number={1000} 
            title="Bronchoscopies" 
            suffix="+" 
            delay={300} 
          />
          <StatCard 
            number={50} 
            title="Thoracoscopies" 
            suffix="+" 
            delay={400} 
          />
          <StatCard 
            number={2000} 
            title="Happy Patients" 
            suffix="+" 
            delay={500} 
          />
          <StatCard 
            number={15} 
            title="Specialized Treatments" 
            suffix="+" 
            delay={600} 
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
