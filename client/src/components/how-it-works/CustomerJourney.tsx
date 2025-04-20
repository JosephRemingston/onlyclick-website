import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";

const CustomerJourney = () => {
  const steps = [
    {
      number: "1",
      title: "Browse Services",
      description: "View a comprehensive list of available services with transparent pricing.",
    },
    {
      number: "2",
      title: "Book and Schedule",
      description: "Select your required services and schedule at your preferred time.",
    },
    {
      number: "3",
      title: "Track Service Progress",
      description: "Monitor service requests in real-time from booking to completion.",
    },
    {
      number: "4",
      title: "Pay Securely",
      description: "Complete payment through our secure in-app payment gateway.",
    },
    {
      number: "5",
      title: "Review and Rate",
      description: "Provide feedback to maintain service quality and help other customers.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
      <AnimatedSection>
        <h3 className="text-2xl font-semibold mb-6 text-[#2D3436] dark:text-white">For Customers</h3>
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0984E3] text-white font-bold">
                  {step.number}
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold mb-2 text-[#2D3436] dark:text-white">{step.title}</h4>
                <p className="text-[#636E72] dark:text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative">
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#0984E3]/10 dark:bg-[#0984E3]/20 rounded-full" />
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#00B894]/10 dark:bg-[#00B894]/20 rounded-full" />
        <motion.div
          className="relative bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="OnlyClick Customer Mobile App Interface"
            className="rounded-xl w-full"
          />
        </motion.div>
      </AnimatedSection>
    </div>
  );
};

export default CustomerJourney;
