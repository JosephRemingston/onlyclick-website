import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Smartphone, QrCode, Apple } from "lucide-react";
import { Helmet } from "react-helmet";

const Download = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Download App - OnlyClick</title>
        <meta
          name="description"
          content="Download the OnlyClick mobile app to access our services on-the-go. Available soon on iOS and Android."
        />
      </Helmet>
      
      <section className="pt-32 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2D3436] dark:text-white">Download Our App</h1>
            <p className="text-lg text-[#636E72] dark:text-gray-300 max-w-3xl mx-auto">
              Get convenient access to all OnlyClick services on your mobile device.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#0984E3]/10 dark:bg-[#0984E3]/20 rounded-full" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#00B894]/10 dark:bg-[#00B894]/20 rounded-full" />
                <div className="relative bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600">
                  <div className="flex justify-center mb-8">
                    <Smartphone className="h-24 w-24 text-[#0984E3]" />
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-center text-[#2D3436] dark:text-white">Coming Soon!</h2>
                  <p className="text-[#636E72] dark:text-gray-300 text-center mb-8">
                    We're working hard to bring you the OnlyClick mobile app. Stay tuned for the launch!
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-600 rounded-lg w-32 h-32">
                      <Apple className="h-10 w-10 text-[#2D3436] dark:text-white mb-2" />
                      <p className="text-sm text-[#636E72] dark:text-gray-300">iOS App</p>
                      <p className="text-xs font-semibold text-[#0984E3]">Coming Soon</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-600 rounded-lg w-32 h-32">
                      <Smartphone className="h-10 w-10 text-[#2D3436] dark:text-white mb-2" />
                      <p className="text-sm text-[#636E72] dark:text-gray-300">Android App</p>
                      <p className="text-xs font-semibold text-[#0984E3]">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6 text-[#2D3436] dark:text-white">App Features</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0984E3]/10 dark:bg-[#0984E3]/20 flex items-center justify-center text-[#0984E3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-[#2D3436] dark:text-white">Easy Booking</h3>
                    <p className="text-[#636E72] dark:text-gray-300">
                      Book any service with just a few taps and schedule at your convenience.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00B894]/10 dark:bg-[#00B894]/20 flex items-center justify-center text-[#00B894]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-[#2D3436] dark:text-white">Real-time Tracking</h3>
                    <p className="text-[#636E72] dark:text-gray-300">
                      Monitor your service requests in real-time with live updates on provider location.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0984E3]/10 dark:bg-[#0984E3]/20 flex items-center justify-center text-[#0984E3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-[#2D3436] dark:text-white">Secure Payments</h3>
                    <p className="text-[#636E72] dark:text-gray-300">
                      Pay for services using multiple secure payment options directly through the app.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00B894]/10 dark:bg-[#00B894]/20 flex items-center justify-center text-[#00B894]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-[#2D3436] dark:text-white">Rating & Reviews</h3>
                    <p className="text-[#636E72] dark:text-gray-300">
                      Rate and review service providers to help maintain high quality standards.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-[#2D3436] dark:text-white">Get Notified</h3>
                <p className="text-[#636E72] dark:text-gray-300 mb-6">
                  Want to be the first to know when our app launches? Sign up for notifications!
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-[#0984E3] focus:border-transparent flex-grow"
                  />
                  <button className="px-6 py-2 bg-[#0984E3] text-white rounded-lg hover:bg-[#0984E3]/90 transition-colors">
                    Notify Me
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-6 text-[#2D3436] dark:text-white">Frequently Asked Questions</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-[#2D3436] dark:text-white">When will the app be available?</h3>
                <p className="text-[#636E72] dark:text-gray-300">
                  We're currently in the final stages of development. The app is expected to launch in the coming months.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-[#2D3436] dark:text-white">Which platforms will be supported?</h3>
                <p className="text-[#636E72] dark:text-gray-300">
                  The OnlyClick app will be available for both iOS and Android devices at launch.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-[#2D3436] dark:text-white">Is the app free to download?</h3>
                <p className="text-[#636E72] dark:text-gray-300">
                  Yes, the OnlyClick app will be completely free to download and use. You only pay for the services you book.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-[#2D3436] dark:text-white">Will the app have all website features?</h3>
                <p className="text-[#636E72] dark:text-gray-300">
                  Yes, the app will include all features available on our website, plus additional mobile-exclusive features.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Download;