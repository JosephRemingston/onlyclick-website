import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import logoImage from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
      className={`fixed w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src={logoImage} alt="OnlyClick Logo" className="h-8 md:h-9" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className={`text-[#2D3436] dark:text-gray-200 hover:text-[#0984E3] transition-colors duration-300 ${
                        location === link.href ? "font-medium text-[#0984E3]" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                  aria-label="Toggle dark mode"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <Moon className="h-5 w-5 text-[#2D3436]" />
                  )}
                </button>
              )}
              <Link
                href="/download"
                className="px-6 py-2 bg-[#00B894] text-white rounded-full hover:bg-[#00B894]/90 transition-colors duration-300 flex items-center"
              >
                <Download className="mr-2 h-4 w-4" /> Download App
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2 bg-[#0984E3] text-white rounded-full hover:bg-[#0984E3]/90 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-[#2D3436] dark:text-white" />
                )}
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="text-[#2D3436] dark:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
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
                        className={`block text-[#2D3436] dark:text-gray-200 hover:text-[#0984E3] transition-colors duration-300 ${
                          location === link.href ? "font-medium text-[#0984E3]" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/download"
                      className="block px-6 py-2 bg-[#00B894] text-white rounded-full hover:bg-[#00B894]/90 transition-colors duration-300 w-fit flex items-center"
                    >
                      <Download className="mr-2 h-4 w-4" /> Download App
                    </Link>
                  </li>
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
