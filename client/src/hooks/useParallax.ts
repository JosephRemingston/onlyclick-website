import { useEffect, useState, useRef, RefObject } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  reverse?: boolean;
}

export const useParallax = <T extends HTMLElement = HTMLDivElement>({
  speed = 0.2,
  direction = 'up',
  reverse = false,
}: ParallaxOptions = {}): RefObject<T> & { offset: number } => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<T>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollY = window.scrollY;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if element is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        const elementMiddle = rect.top + rect.height / 2;
        const windowMiddle = windowHeight / 2;
        const distanceFromCenter = elementMiddle - windowMiddle;
        
        // Calculate parallax value based on distance from center of viewport
        const value = (distanceFromCenter * speed) * (reverse ? -1 : 1);
        setOffset(value);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [speed, direction, reverse]);
  
  return { ...ref, offset };
};

export default useParallax;
