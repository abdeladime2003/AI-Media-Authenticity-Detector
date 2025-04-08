import React from 'react';

const TrustIndicators = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">
          Trusted by Professionals & Researchers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '92.4%', label: 'Detection Accuracy' },
            { value: '500K+', label: 'Images Analyzed' },
            { value: '<1s', label: 'Avg. Processing Time' },
            { value: '25+', label: 'AI Research Partners' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-bold text-white mb-2">{item.value}</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
