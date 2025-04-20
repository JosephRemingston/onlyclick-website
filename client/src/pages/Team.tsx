import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Linkedin, Twitter, GitPullRequest, Dribbble } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";

const Team = () => {
  const teamMembers = [
    {
      name: "Ch. Lohit",
      position: "Executive Member",
      description: "Leading the vision and strategic direction for OnlyClick.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      socialLinks: [
        { icon: <Linkedin className="h-5 w-5" />, url: "#" },
        { icon: <Twitter className="h-5 w-5" />, url: "#" },
        { icon: <GitPullRequest className="h-5 w-5" />, url: "#" },
      ],
    },
    {
      name: "Subro Ghose",
      position: "Frontend Developer",
      description: "Creating intuitive and responsive user interfaces for our platform.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      socialLinks: [
        { icon: <Linkedin className="h-5 w-5" />, url: "#" },
        { icon: <GitPullRequest className="h-5 w-5" />, url: "#" },
      ],
    },
    {
      name: "L. Joseph",
      position: "Backend Developer",
      description: "Building robust and scalable server architecture for OnlyClick.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      socialLinks: [
        { icon: <Linkedin className="h-5 w-5" />, url: "#" },
        { icon: <GitPullRequest className="h-5 w-5" />, url: "#" },
      ],
    },
    {
      name: "Srija Ghosh",
      position: "UI/UX Developer",
      description: "Designing intuitive and delightful user experiences for our customers.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      socialLinks: [
        { icon: <Linkedin className="h-5 w-5" />, url: "#" },
        { icon: <Dribbble className="h-5 w-5" />, url: "#" },
      ],
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Our Team - OnlyClick</title>
        <meta
          name="description"
          content="Meet the talented team behind OnlyClick. Our experts are dedicated to revolutionizing the home services industry."
        />
      </Helmet>
      
      <section className="pt-32 pb-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2D3436] dark:text-white">Our Team</h1>
            <p className="text-lg text-[#636E72] dark:text-gray-300 max-w-3xl mx-auto">
              Meet the talented individuals building OnlyClick.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="hover:-translate-y-2 transition-transform duration-300"
                variants={itemVariants}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                  <div className="bg-gray-100 dark:bg-gray-700">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.position}`}
                      className="object-cover object-center w-full h-60"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-[#2D3436] dark:text-white">{member.name}</h3>
                    <p className="text-[#0984E3] mb-3">{member.position}</p>
                    <p className="text-[#636E72] dark:text-gray-300 text-sm">{member.description}</p>
                    <div className="mt-4 flex space-x-3">
                      {member.socialLinks.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          className="text-[#2D3436] dark:text-gray-300 hover:text-[#0984E3] dark:hover:text-[#0984E3] transition-colors"
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#2D3436] dark:text-white">Join Our Team</h2>
            <p className="text-[#636E72] dark:text-gray-300 max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals to join our mission of transforming the home services industry.
            </p>
            <Link href="/contact">
              <div className="inline-block px-8 py-3 bg-[#0984E3] text-white rounded-full hover:bg-[#0984E3]/90 transition-colors duration-300 font-medium cursor-pointer">
                View Open Positions
              </div>
            </Link>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#2D3436] dark:text-white">Innovative Environment</h3>
              <p className="text-[#636E72] dark:text-gray-300">
                Work in a fast-paced, creative environment where your ideas are valued and implemented.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#2D3436] dark:text-white">Growth Opportunities</h3>
              <p className="text-[#636E72] dark:text-gray-300">
                Continuous learning and career advancement opportunities as we expand across India.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#2D3436] dark:text-white">Impact Driven</h3>
              <p className="text-[#636E72] dark:text-gray-300">
                Be part of a mission that's creating positive change in communities and lives.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Team;
