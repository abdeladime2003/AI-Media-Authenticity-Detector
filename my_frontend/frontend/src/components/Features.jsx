const Features = () => {
    const features = [
      {
        icon: '🔍', 
        title: 'Pre-Processing',
        description: 'Enhances image quality for better detection accuracy'
        
      },
      {
        icon: '⚡',
        title: 'Real-Time Processing',
        description: 'Get results in under 30 seconds for most images'
      },
      {
        icon: '📊',
        title: 'Prediction and Decision Making',
        description: 'Predicts the likelihood of an image being a deepfake'
      }
    ];
  
    return (
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            How Our Detection Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all">
                <span className="text-3xl block mb-3">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;