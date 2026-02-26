import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import SplitSection from "../components/landing/SplitSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/layout/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SplitSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;