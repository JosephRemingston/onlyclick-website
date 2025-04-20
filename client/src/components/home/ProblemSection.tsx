import { motion } from "framer-motion";
import { Search, AlertTriangle, CreditCard, Clock } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const ProblemSection = () => {
  const problems = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Finding Reliable Providers",
      description: "Apartment associations struggle to find and manage quality service providers consistently.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Unverified Workers",
      description: "Hiring unverified workers leads to risky, unprofessional, and inconsistent service quality.",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "No Transparency",
      description: "Unstructured pricing and lack of transparency leads to overcharging and poor customer experience.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Delayed Repairs",
      description: "No centralized platform to handle requests leads to inefficient service coordination and delays.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Problems We Solve</h2>
          <p className="text-[#636E72] max-w-2xl mx-auto">
            For both service providers and customers, the current system is broken. We're here to fix it.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Frustrated property manager looking at maintenance requests"
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>

          <div className="order-1 md:order-2">
            <div className="space-y-8">
              {problems.map((problem, index) => (
                <AnimatedSection key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#0984E3] text-white">
                      {problem.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                    <p className="text-[#636E72]">{problem.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
