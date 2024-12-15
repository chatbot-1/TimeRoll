import React, { useState } from "react";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 to-blue-50 text-gray-900">
      {/* Header */}
      <header className="py-16 text-center max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Find answers to some of the most common questions about using MemoryApp.
        </p>
      </header>

      {/* FAQ Accordion */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="space-y-6">
          <div
            className="cursor-pointer p-5 bg-white shadow-md rounded-lg border border-gray-200 hover:bg-gray-100"
            onClick={() => toggleAccordion(0)}
          >
            <h2 className="text-xl font-semibold text-gray-800">How do I create a memory?</h2>
          </div>
          {activeIndex === 0 && (
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
              <p className="text-gray-600">
                Simply upload your media (photos, videos, text) and set a time when you'd like to open the memory.
              </p>
            </div>
          )}

          <div
            className="cursor-pointer p-5 bg-white shadow-md rounded-lg border border-gray-200 hover:bg-gray-100"
            onClick={() => toggleAccordion(1)}
          >
            <h2 className="text-xl font-semibold text-gray-800">Can I share my memories with others?</h2>
          </div>
          {activeIndex === 1 && (
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
              <p className="text-gray-600">
                Yes, you can share your memories with friends and family. They can view them once the time is set to open.
              </p>
            </div>
          )}

          <div
            className="cursor-pointer p-5 bg-white shadow-md rounded-lg border border-gray-200 hover:bg-gray-100"
            onClick={() => toggleAccordion(2)}
          >
            <h2 className="text-xl font-semibold text-gray-800">Can I edit a memory after creating it?</h2>
          </div>
          {activeIndex === 2 && (
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
              <p className="text-gray-600">
                Yes, you can edit your memory anytime before the set time to open it. You can change the content or the date/time.
              </p>
            </div>
          )}

          <div
            className="cursor-pointer p-5 bg-white shadow-md rounded-lg border border-gray-200 hover:bg-gray-100"
            onClick={() => toggleAccordion(3)}
          >
            <h2 className="text-xl font-semibold text-gray-800">How do I set a time for my memory?</h2>
          </div>
          {activeIndex === 3 && (
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
              <p className="text-gray-600">
                You can choose a specific date and time, or you can opt for a random time in the future for your memory to open.
              </p>
            </div>
          )}

          <div
            className="cursor-pointer p-5 bg-white shadow-md rounded-lg border border-gray-200 hover:bg-gray-100"
            onClick={() => toggleAccordion(4)}
          >
            <h2 className="text-xl font-semibold text-gray-800">Is my data safe and secure?</h2>
          </div>
          {activeIndex === 4 && (
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
              <p className="text-gray-600">
                Yes, your data is stored securely. We prioritize privacy and security to ensure your memories are safe.
              </p>
            </div>
          )}

          <div
            className="cursor-pointer p-5 bg-white shadow-md rounded-lg border border-gray-200 hover:bg-gray-100"
            onClick={() => toggleAccordion(5)}
          >
            <h2 className="text-xl font-semibold text-gray-800">Can I delete a memory?</h2>
          </div>
          {activeIndex === 5 && (
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
              <p className="text-gray-600">
                Yes, you can delete any memory at any time. Once deleted, it will no longer be accessible.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
