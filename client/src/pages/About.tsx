import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>About Us - OnlyClick</title>
        <meta
          name="description"
          content="Learn about OnlyClick's mission to transform the home services industry in India."
        />
      </Helmet>
      
      <section className="pt-32 pb-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2D3436] dark:text-white">About OnlyClick</h1>
            <p className="text-lg text-[#636E72] dark:text-gray-300 max-w-3xl mx-auto">
              Our mission is to transform how home services are delivered and managed across India.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6 text-[#2D3436] dark:text-white">Our Story</h2>
              <p className="text-[#636E72] dark:text-gray-300 mb-4">
                OnlyClick was founded with a vision to solve the persistent challenges in India's home services industry. 
                We recognized the struggles faced by both customers seeking reliable services and skilled professionals 
                looking for consistent work opportunities.
              </p>
              <p className="text-[#636E72] dark:text-gray-300 mb-4">
                Our team of experienced professionals from diverse backgrounds came together to build a platform that 
                addresses these challenges, creating a seamless connection between service providers and customers.
              </p>
              <p className="text-[#636E72] dark:text-gray-300">
                Today, we're rapidly growing to become India's most trusted home services platform, serving both 
                individual households and large commercial establishments.
              </p>
            </AnimatedSection>
            
            <AnimatedSection>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="OnlyClick team collaborating"
                className="rounded-xl shadow-lg w-full"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#2D3436] dark:text-white">Our Mission & Vision</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-[#0984E3]">Our Mission</h3>
              <p className="text-[#636E72] dark:text-gray-300">
                To create a seamless, transparent, and reliable platform that connects quality service providers with 
                customers across India, improving service delivery standards and creating sustainable income opportunities.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-[#00B894]">Our Vision</h3>
              <p className="text-[#636E72] dark:text-gray-300">
                To become India's most trusted home services platform, known for quality, reliability, and convenience, 
                transforming how services are delivered and managed across residential and commercial spaces.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#2D3436] dark:text-white">Our Values</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-[#2D3436] dark:text-white">Quality</h3>
              <p className="text-[#636E72] dark:text-gray-300">
                We're committed to maintaining the highest standards in service delivery and platform performance.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-[#2D3436] dark:text-white">Transparency</h3>
              <p className="text-[#636E72] dark:text-gray-300">
                We believe in clear communication and pricing, with no hidden charges or unexpected surprises.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-[#2D3436] dark:text-white">Reliability</h3>
              <p className="text-[#636E72] dark:text-gray-300">
                We ensure consistent service quality and platform availability that our users can depend on.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-[#2D3436] dark:text-white">Innovation</h3>
              <p className="text-[#636E72] dark:text-gray-300">
                We continuously improve our platform and processes to better serve our growing community.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
