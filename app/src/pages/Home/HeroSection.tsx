import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to MemoryApp</h1>
        <p className="text-xl text-gray-600 mb-6">
          Store your memories and open them at just the right time. Share your moments with loved ones.
        </p>
        <a
          href="/signup"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
