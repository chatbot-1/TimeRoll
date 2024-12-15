import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Store Memories</h3>
            <p className="text-gray-600">
              Keep your memories safe and organized. Access them whenever you want, or set them to open at a future time.
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Set Open Time</h3>
            <p className="text-gray-600">
              Choose when to open your memories—whether it’s a year, a month, or a day later.
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Share with Loved Ones</h3>
            <p className="text-gray-600">
              Share your memories with friends and family. Create lasting bonds with special moments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
