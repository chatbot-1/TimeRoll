import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="py-16 text-center">
        <h1 className="text-4xl font-semibold text-gray-800">Privacy Policy</h1>
        <p className="text-lg text-gray-600 mt-4">Your privacy matters to us</p>
      </header>

      <section className="max-w-3xl mx-auto px-6">
        <p className="text-gray-600 mb-6">
          This privacy policy outlines how we collect, use, and protect your information when you use MemoryApp. Your data is important to us, and we are committed to protecting it.
        </p>
        {/* Additional privacy policy details */}
      </section>
    </div>
  );
};

export default Privacy;
