import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a deepfake?",
      answer: "A deepfake is a synthetic media where a person in an image or video is replaced with someone else's likeness using AI. It can be used for both benign and malicious purposes."
    },
    {
      question: "What kind of media can I upload?",
      answer: "We currently support image uploads in JPEG, PNG. Video support is coming soon!"
    },
    {
      question: "Is my data safe?",
      answer: "Yes, we prioritize user privacy. All uploaded files are processed securely and deleted after analysis. We do not store any personal data."
    },
    {
      question: "Can I use this system for commercial purposes?",
      answer: "Currently, this system is intended for educational and research purposes only. If you’re interested in commercial use, feel free to contact us for licensing options."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-700 pb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-white hover:text-purple-400 transition-colors"
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                {activeIndex === index ? (
                  <FiMinus className="text-gray-400" />
                ) : (
                  <FiPlus className="text-gray-400" />
                )}
              </button>
              
              {activeIndex === index && (
                <div className="mt-3 text-gray-300 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;