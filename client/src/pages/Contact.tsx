import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MessageSquare, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      info: "onlyclick.connect@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      info: "+91-7207383912",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Social Media",
      socialLinks: [
        { icon: <Facebook className="h-5 w-5" />, url: "#" },
        { icon: <Twitter className="h-5 w-5" />, url: "#" },
        { icon: <Instagram className="h-5 w-5" />, url: "#" },
        { icon: <Linkedin className="h-5 w-5" />, url: "#" },
      ],
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
        <title>Contact Us - OnlyClick</title>
        <meta
          name="description"
          content="Get in touch with the OnlyClick team. We're here to answer your questions and help with your service needs."
        />
      </Helmet>
      
      <section className="pt-32 pb-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2D3436] dark:text-white">Get in Touch</h1>
            <p className="text-lg text-[#636E72] dark:text-gray-300 max-w-3xl mx-auto">
              Interested in learning more about OnlyClick or partnering with us? We'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2D3436] dark:text-white">Contact Us</h2>
              <p className="text-[#636E72] dark:text-gray-300 mb-8">
                Have questions about our services or interested in partnering with us? 
                Reach out to our team and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0984E3]/10 dark:bg-[#0984E3]/20 flex items-center justify-center text-[#0984E3]">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-[#2D3436] dark:text-white">{item.title}</h4>
                      {item.info && <p className="text-[#636E72] dark:text-gray-300">{item.info}</p>}
                      {item.socialLinks && (
                        <div className="flex space-x-4 mt-2">
                          {item.socialLinks.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              className="text-[#2D3436] dark:text-gray-300 hover:text-[#0984E3] dark:hover:text-[#0984E3] transition-colors"
                            >
                              {link.icon}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-[#2D3436] dark:text-white">Office Hours</h3>
                <div className="space-y-2 text-[#636E72] dark:text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#2D3436] dark:text-white">Frequently Asked Questions</h2>
            <p className="text-[#636E72] dark:text-gray-300 max-w-2xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-[#2D3436] dark:text-white">How do I book a service?</h3>
                <p className="text-[#636E72] dark:text-gray-300">
                  You can book a service through our app or website by selecting the service you need, 
                  choosing a preferred time, and completing the booking process.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-[#2D3436] dark:text-white">How are your service providers verified?</h3>
                <p className="text-[#636E72] dark:text-gray-300">
                  All our service providers undergo thorough background checks, skill verification, 
                  and professional training before joining our platform.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-[#2D3436] dark:text-white">What payment methods do you accept?</h3>
                <p className="text-[#636E72] dark:text-gray-300">
                  We accept various payment methods including credit/debit cards, UPI, net banking, 
                  and cash on delivery for your convenience.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-[#2D3436] dark:text-white">Can I reschedule or cancel a service?</h3>
                <p className="text-[#636E72] dark:text-gray-300">
                  Yes, you can reschedule or cancel services through our app or website up to 4 hours 
                  before the scheduled service time without any charges.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
