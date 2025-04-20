import { Link } from "wouter";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Download } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  
  // Simple parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        setOffset(window.scrollY * 0.2);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="pt-32 pb-20 md:pb-32 relative overflow-hidden"
      ref={sectionRef}
    >
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-800" 
        style={{ 
          transform: `translateY(${offset}px)` 
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#2D3436] dark:text-white">
              One-Click Solution for{" "}
              <span className="bg-gradient-to-r from-[#0984E3] to-[#00B894] text-transparent bg-clip-text">
                Home Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#636E72] dark:text-gray-300 mb-8 max-w-xl">
              Bridging the gap between domestic service providers and commercial spaces. 
              The ultimate platform for seamless service management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/download">
                <div className="px-8 py-3 bg-[#00B894] text-white rounded-full hover:bg-[#00B894]/90 transition-colors duration-300 text-center cursor-pointer flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" /> Download App
                </div>
              </Link>
              <Link href="/how-it-works">
                <div className="px-8 py-3 border border-[#0984E3] text-[#0984E3] dark:text-[#0984E3] rounded-full hover:bg-[#0984E3]/10 transition-colors duration-300 text-center cursor-pointer">
                  How It Works
                </div>
              </Link>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#0984E3] flex items-center justify-center text-white text-xs font-bold">
                  +1K
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00B894] flex items-center justify-center text-white text-xs font-bold">
                  +5K
                </div>
                <div className="w-10 h-10 rounded-full bg-[#2D3436] flex items-center justify-center text-white text-xs font-bold">
                  +10K
                </div>
              </div>
              <p className="text-sm text-[#636E72] dark:text-gray-300">
                Trusted by thousands of customers and service providers
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#00B894]/10 dark:bg-[#00B894]/20 rounded-full" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#0984E3]/10 dark:bg-[#0984E3]/20 rounded-full" />
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="OnlyClick platform interface showing service booking"
                className="w-full h-auto rounded-t-2xl"
              />
              <div className="p-6 bg-white dark:bg-gray-800">
                <h3 className="font-semibold text-lg mb-2 text-[#2D3436] dark:text-white">Mobile App Coming Soon</h3>
                <p className="text-[#636E72] dark:text-gray-300">
                  Schedule, track, and manage all your service needs from our intuitive mobile app.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="inline-block px-3 py-1 bg-[#0984E3]/10 dark:bg-[#0984E3]/20 text-[#0984E3] text-sm rounded-full">
                    Verified Providers
                  </span>
                  <span className="inline-block px-3 py-1 bg-[#00B894]/10 dark:bg-[#00B894]/20 text-[#00B894] text-sm rounded-full">
                    Quick Access
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
    </section>
  );
};

export default HeroSection;
