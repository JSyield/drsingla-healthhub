
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in' | 'slide-in-right';
  delay?: number;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.2,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  const animationClass = `animate-${animation}`;
  const delayStyle = { animationDelay: `${delay}ms`, opacity: 0 };

  return (
    <div
      ref={sectionRef}
      className={cn(className)}
      style={isVisible ? { ...delayStyle } : { opacity: 0 }}
      data-animate={isVisible ? 'true' : 'false'}
      data-animation={animation}
    >
      <div className={isVisible ? animationClass : ''}>{children}</div>
    </div>
  );
};

export default AnimatedSection;
