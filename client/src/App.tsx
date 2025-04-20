import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/shared/ScrollToTop";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import HowItWorks from "@/pages/HowItWorks";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import Download from "@/pages/Download";
import NotFound from "@/pages/not-found";

function App() {
  const [location] = useLocation();
  
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-[#2D3436] dark:text-white">
          <Header />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Switch key={location}>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/how-it-works" component={HowItWorks} />
                <Route path="/team" component={Team} />
                <Route path="/contact" component={Contact} />
                <Route path="/download" component={Download} />
                <Route component={NotFound} />
              </Switch>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
