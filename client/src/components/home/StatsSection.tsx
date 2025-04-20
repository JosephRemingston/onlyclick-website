import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";

const StatsSection = () => {
  const statItems = [
    { value: "$217.1M", label: "Current Market Revenue (2022)" },
    { value: "$1,092.5M", label: "Expected Market Size (2030)" },
    { value: "22.4%", label: "CAGR Growth Rate" },
    { value: "5+", label: "Commercial Sectors Served" },
  ];

  const marketSegments = [
    {
      title: "Residential Market",
      description: "Over 301.3 million apartments across India need reliable service providers.",
      percentage: 75,
      color: "bg-[#0984E3]",
    },
    {
      title: "Commercial Market",
      description: "165,000+ hotels, 332,732+ restaurants, and 138,285+ offices require maintenance.",
      percentage: 65,
      color: "bg-[#00B894]",
    },
    {
      title: "Educational Sector",
      description: "Over 1.4 million schools and 45,000 colleges need consistent service solutions.",
      percentage: 85,
      color: "bg-[#2D3436]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2D3436] dark:text-white">Growing Market Opportunity</h2>
          <p className="text-[#636E72] dark:text-gray-300 max-w-2xl mx-auto">
            The home services market in India is expanding rapidly, creating tremendous opportunities.
          </p>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition-transform duration-300"
              variants={itemVariants}
            >
              <div className="text-[#0984E3] text-3xl font-bold mb-2">{item.value}</div>
              <p className="text-[#636E72] dark:text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {marketSegments.map((segment, index) => (
            <AnimatedSection
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition-transform duration-300"
            >
              <h3 className="font-semibold text-lg mb-3 text-[#2D3436] dark:text-white">{segment.title}</h3>
              <p className="text-[#636E72] dark:text-gray-300 mb-4">{segment.description}</p>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className={`${segment.color} h-2 rounded-full`}
                    style={{ width: `${segment.percentage}%` }}
                  ></div>
                </div>
                <span className={`ml-3 text-${segment.color} font-semibold`}>
                  {segment.percentage}%
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
