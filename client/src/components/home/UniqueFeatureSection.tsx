import { Speaker, Building, Briefcase, Clock } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const UniqueFeatureSection = () => {
  const features = [
    {
      icon: <Speaker className="h-8 w-8" />,
      title: "Custom Post Feature",
      description: "Create custom service requests for unique or specialized needs that aren't covered by our standard services.",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Gated Community Integration",
      description: "Special features designed for apartment associations and gated communities to manage multiple service requests efficiently.",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Commercial Space Solutions",
      description: "Specialized tools for hotels, schools, offices, and other commercial spaces to manage their service provider network.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "On-Demand Quick Services",
      description: "Immediate access to urgent services like quick maid services for short-notice requirements.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2D3436] dark:text-white">Unique Features</h2>
          <p className="text-[#636E72] dark:text-gray-300 max-w-2xl mx-auto">
            What makes OnlyClick stand out from the competition.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#0984E3]/10 dark:bg-[#0984E3]/20 rounded-full text-[#0984E3] mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#2D3436] dark:text-white">{feature.title}</h3>
              <p className="text-[#636E72] dark:text-gray-300">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatureSection;
