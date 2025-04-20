import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Zap, Droplet, Drill, Brush, Home, Wrench } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";

const Services = () => {
  const serviceCategories = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Electrical Services",
      description: "Professional electrical installation, repair, and maintenance services for homes and commercial spaces.",
      services: ["Circuit repair", "Appliance installation", "Wiring & rewiring", "Electrical safety checks"],
    },
    {
      icon: <Droplet className="h-8 w-8" />,
      title: "Plumbing Services",
      description: "Expert plumbing solutions for leaks, installations, and maintenance requirements.",
      services: ["Leak detection & repair", "Pipe installation", "Drain cleaning", "Fixture replacement"],
    },
    {
      icon: <Drill className="h-8 w-8" />,
      title: "Carpentry Services",
      description: "Skilled carpenters for furniture repair, installation, and custom woodwork.",
      services: ["Furniture assembly", "Cabinet installation", "Door & window repair", "Custom woodwork"],
    },
    {
      icon: <Brush className="h-8 w-8" />,
      title: "Painting Services",
      description: "Professional painting services for interior and exterior spaces with quality finishes.",
      services: ["Interior painting", "Exterior painting", "Textured finishes", "Waterproofing"],
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Cleaning Services",
      description: "Comprehensive cleaning solutions for residential and commercial properties.",
      services: ["Deep cleaning", "Regular maintenance", "Carpet & upholstery", "Post-construction cleaning"],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Handyman Services",
      description: "General maintenance and repair services for various household and commercial needs.",
      services: ["General repairs", "Mounting & installation", "Furniture assembly", "Small fixes"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Our Services - OnlyClick</title>
        <meta
          name="description"
          content="Explore the wide range of professional home services offered by OnlyClick, from electrical work to plumbing, carpentry, cleaning, and more."
        />
      </Helmet>
      
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-[#636E72] max-w-3xl mx-auto">
              Find professional and reliable home services all in one place, delivered by verified experts.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <AnimatedSection
                key={index}
                className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#0984E3]/10 rounded-full text-[#0984E3] mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <p className="text-[#636E72] mb-6">{category.description}</p>
                
                <h4 className="font-medium text-[#2D3436] mb-3">Available Services:</h4>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, i) => (
                    <li key={i} className="flex items-center text-[#636E72]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-[#0984E3]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact">
                  <a className="inline-block px-6 py-2 bg-[#0984E3]/10 text-[#0984E3] rounded-lg hover:bg-[#0984E3]/20 transition-colors duration-300 font-medium">
                    Book Service
                  </a>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-[#0984E3] rounded-xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <AnimatedSection>
                <h2 className="text-3xl font-bold mb-4">Custom Service Request</h2>
                <p className="mb-6">
                  Don't see the exact service you need? We can help with custom requirements too!
                </p>
                <Link href="/contact">
                  <a className="inline-block px-6 py-3 bg-white text-[#0984E3] rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium">
                    Request Custom Service
                  </a>
                </Link>
              </AnimatedSection>
              
              <AnimatedSection>
                <div className="rounded-xl bg-white/10 p-6">
                  <h3 className="text-xl font-semibold mb-4">Benefits of Custom Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Tailored to your specific requirements
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Personalized service approach
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Flexible scheduling options
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
