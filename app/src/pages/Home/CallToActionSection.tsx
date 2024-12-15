import React from "react";

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Ready to Start Storing Memories?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Create your account and start your journey of preserving precious moments.
        </p>
        <a
          href="/signup"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
        >
          Sign Up Now
        </a>
      </div>
    </section>
  );
};

export default CallToActionSection;
