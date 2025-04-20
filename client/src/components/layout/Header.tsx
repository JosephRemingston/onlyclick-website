import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll behavior for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#2D3436]">
              Only<span className="text-[#0984E3]">Click</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className={`text-[#2D3436] hover:text-[#0984E3] transition-colors duration-300 ${
                        location === link.href ? "font-medium text-[#0984E3]" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              href="/contact"
              className="px-6 py-2 bg-[#0984E3] text-white rounded-full hover:bg-[#0984E3]/90 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-[#2D3436] focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="mt-4 pb-4">
                <ul className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block text-[#2D3436] hover:text-[#0984E3] transition-colors duration-300 ${
                          location === link.href ? "font-medium text-[#0984E3]" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/contact"
                      className="block px-6 py-2 bg-[#0984E3] text-white rounded-full hover:bg-[#0984E3]/90 transition-colors duration-300 w-fit"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
