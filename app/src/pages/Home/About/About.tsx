import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-teal-50 text-gray-800 py-12">
      <header className="py-16 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-xl mx-auto">
          Our mission and vision behind MemoryApp – the perfect place to preserve and share precious moments at the right time.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We believe memories are the heart of our lives. Our mission is to help people capture, store, and share their most cherished memories at just the right moment, making every experience unforgettable.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            MemoryApp was created by a passionate team dedicated to preserving memories. We realized that the most precious memories often fade over time, so we built a platform that helps people store and relive those moments whenever they need them.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 bg-teal-100 rounded-lg shadow-lg mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Join Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you're here to create your own memories or share those that matter most, we’re excited to have you join us. Our team is always growing, and we can’t wait to see the memories you create.
        </p>
      </section>
    </div>
  );
};

export default About;
