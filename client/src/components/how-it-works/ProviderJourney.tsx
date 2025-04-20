import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";

const ProviderJourney = () => {
  const steps = [
    {
      number: "1",
      title: "Register and Get Verified",
      description: "Create a professional profile and complete our verification process.",
    },
    {
      number: "2",
      title: "Receive Booking Requests",
      description: "Get notified of new service requests from customers in your area.",
    },
    {
      number: "3",
      title: "Navigate to Location",
      description: "Use our in-app navigation to easily find the customer's location.",
    },
    {
      number: "4",
      title: "Complete Services",
      description: "Provide professional service and mark tasks as complete in the app.",
    },
    {
      number: "5",
      title: "Get Paid",
      description: "Receive secure payments directly to your account with transparent commission structure.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1">
        <AnimatedSection className="relative">
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#00B894]/10 rounded-full" />
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#0984E3]/10 rounded-full" />
          <motion.div
            className="relative bg-white p-3 rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1632631382980-a4fc526ae08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="OnlyClick Service Provider Mobile App Interface"
              className="rounded-xl w-full"
            />
          </motion.div>
        </AnimatedSection>
      </div>

      <div className="order-1 md:order-2">
        <AnimatedSection>
          <h3 className="text-2xl font-semibold mb-6">For Service Providers</h3>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00B894] text-white font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-[#636E72]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ProviderJourney;
