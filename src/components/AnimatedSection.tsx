
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
  className = "",
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

  // Create animation classes
  const getAnimationClass = () => {
    if (!isVisible) return '';
    switch (animation) {
      case 'fade-in-up':
        return 'animate-fade-in-up';
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-in-right':
        return 'animate-slide-in-right';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div
      ref={sectionRef}
      className={cn(className)}
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out', animationDelay: `${delay}ms` }}
    >
      <div className={cn(getAnimationClass())}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedSection;
