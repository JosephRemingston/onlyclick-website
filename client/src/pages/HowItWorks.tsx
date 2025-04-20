import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CustomerJourney from "@/components/how-it-works/CustomerJourney";
import ProviderJourney from "@/components/how-it-works/ProviderJourney";
import { Link } from "wouter";
import { Helmet } from "react-helmet";

const HowItWorks = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>How It Works - OnlyClick</title>
        <meta
          name="description"
          content="Learn how OnlyClick works for both customers and service providers. Our simple process makes service management easy."
        />
      </Helmet>
      
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How OnlyClick Works</h1>
            <p className="text-lg text-[#636E72] max-w-3xl mx-auto">
              Our intuitive platform makes service management simple for both customers and providers.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <CustomerJourney />
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ProviderJourney />
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Technology</h2>
            <p className="text-[#636E72] max-w-2xl mx-auto">
              The OnlyClick platform is built with cutting-edge technology to ensure a seamless experience.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Real-time Tracking</h3>
              <p className="text-[#636E72]">
                Monitor your service requests in real-time with live updates on provider location and estimated arrival.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
              <p className="text-[#636E72]">
                Our platform ensures secure transactions with multiple payment options and transparent pricing.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Smart Matching</h3>
              <p className="text-[#636E72]">
                Advanced algorithms match your service requests with the most qualified providers in your area.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-[#0984E3] rounded-xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience OnlyClick?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Join thousands of satisfied customers and service providers on India's fastest growing service platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <a className="px-8 py-3 bg-white text-[#0984E3] rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium">
                    Explore Services
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="px-8 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-colors duration-300 font-medium">
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HowItWorks;
