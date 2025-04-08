// src/components/ProcessFlow.jsx
import { FaSearch, FaBrain, FaChartBar } from 'react-icons/fa';

const ProcessFlow = () => {
  const steps = [
    {
      icon: <FaSearch className="text-3xl text-purple-500" />,
      title: "Pre-Processing",
      description: "Enhances image quality for better detection accuracy"
    },
    {
      icon: <FaBrain className="text-3xl text-blue-500" />,
      title: "Real-Time Processing",
      description: "Get results in under 30 seconds for most images"
    },
    {
      icon: <FaChartBar className="text-3xl text-green-500" />,
      title: "Prediction and Decision Making",
      description: "Predicts the likelihood of an image being a deepfake"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          How Our Detection Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl text-center">
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;