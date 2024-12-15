import React from "react";

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="py-16 text-center">
        <h1 className="text-4xl font-semibold text-gray-800">Terms of Service</h1>
        <p className="text-lg text-gray-600 mt-4">Please read our terms carefully</p>
      </header>

      <section className="max-w-3xl mx-auto px-6">
        <p className="text-gray-600 mb-6">
          These terms of service govern your use of MemoryApp. By using our service, you agree to abide by these terms.
        </p>
        {/* Additional terms and conditions */}
      </section>
    </div>
  );
};

export default Terms;
