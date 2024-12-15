import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 to-blue-50 text-gray-800">
      {/* Header */}
      <header className="py-16 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">How It Works</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          A simple guide to start using MemoryApp and begin creating your treasured moments.
        </p>
      </header>

      {/* Steps Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Step 1 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white">
              <span className="text-2xl font-semibold">1</span>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Create a Memory</h2>
              <p className="text-gray-600 text-lg">
                Upload photos, videos, or text to store your memory. It's as simple as clicking a button and selecting the content you want to store.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white">
              <span className="text-2xl font-semibold">2</span>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Set the Open Time</h2>
              <p className="text-gray-600 text-lg">
                Choose when you want to open the memory. You can set it for a specific date, a certain time, or even a random time in the future.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white">
              <span className="text-2xl font-semibold">3</span>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Share with Loved Ones</h2>
              <p className="text-gray-600 text-lg">
                You can choose to share your memory with others, making it even more special to relive it with friends and family.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
