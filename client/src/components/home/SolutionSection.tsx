import { motion } from "framer-motion";
import { Shield, ClipboardList, DollarSign, Building, Settings } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Verified Professionals",
      description: "Access to skilled and verified service providers including electricians, plumbers, carpenters, cleaners, painters, and more.",
      features: ["Background verified", "Skill certified", "Professional training"],
    },
    {
      icon: <ClipboardList className="h-12 w-12" />,
      title: "Streamlined Management",
      description: "Comprehensive platform that allows properties to manage service requests efficiently through one interface.",
      features: ["Centralized dashboard", "Request tracking", "Performance analytics"],
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: "Transparent Pricing",
      description: "Clear and competitive pricing structure that eliminates overcharging and builds trust.",
      features: ["Upfront estimates", "No hidden charges", "Secure payments"],
    },
  ];

  const marketSides = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Commercial Spaces",
      description: "Gated communities, hotels, schools, colleges, offices, hospitals, shopping malls, and more can efficiently manage their service needs.",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Service Providers",
      description: "Electricians, plumbers, carpenters, cleaners, painters, maids, and other professionals can grow their business through our platform.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2D3436] dark:text-white">Our Solution</h2>
          <p className="text-[#636E72] dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive platform that bridges the gap between service providers and commercial spaces.
          </p>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition-transform duration-300"
              variants={itemVariants}
            >
              <div className="mb-6 text-[#0984E3]">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#2D3436] dark:text-white">{solution.title}</h3>
              <p className="text-[#636E72] dark:text-gray-300 mb-4">{solution.description}</p>
              <ul className="space-y-2 text-[#636E72] dark:text-gray-300">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-[#00B894]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h3 className="text-2xl font-semibold mb-6 text-[#2D3436] dark:text-white">Designed for Both Sides of the Market</h3>
            <div className="space-y-6">
              {marketSides.map((side, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0984E3]/10 dark:bg-[#0984E3]/20 flex items-center justify-center text-[#0984E3]">
                    {side.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg text-[#2D3436] dark:text-white">{side.title}</h4>
                    <p className="text-[#636E72] dark:text-gray-300">{side.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <img
              src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="OnlyClick connecting service providers with customers"
              className="rounded-xl shadow-lg w-full"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
