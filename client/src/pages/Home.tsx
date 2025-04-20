import { motion } from "framer-motion";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import UniqueFeatureSection from "@/components/home/UniqueFeatureSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>OnlyClick - Home Services Platform</title>
        <meta
          name="description"
          content="OnlyClick - A platform bridging the gap between service providers and commercial spaces. One-click solution for home services."
        />
      </Helmet>
      
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <SolutionSection />
      <UniqueFeatureSection />
    </motion.div>
  );
};

export default Home;
