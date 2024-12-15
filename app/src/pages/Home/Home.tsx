import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import CallToActionSection from "./CallToActionSection";
import About from "./About/About";
import HowItWorks from "./HowItWorks/HowItWorks";
import Footer from "../../components/Footer/Footer";
import FAQ from "./FAQ/FAQ";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />
      <About/>
      <HowItWorks/>
      <CallToActionSection />
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default Home;
