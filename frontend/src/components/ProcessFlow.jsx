// src/components/ProcessFlow.jsx
import { FaSearch, FaBrain, FaChartBar } from 'react-icons/fa';

const ProcessFlow = () => {
  const steps = [
    {
      icon: <FaSearch className="text-3xl text-purple-500" />,
      title: "Pré-traitement",
      description: "Améliore la qualité de l'image pour une meilleure précision de détection"
    },
    {
      icon: <FaBrain className="text-3xl text-blue-500" />,
      title: "Traitement en temps réel",
      description: "Obtenez des résultats en moins de 10 secondes pour la plupart des images"
    },
    {
      icon: <FaChartBar className="text-3xl text-green-500" />,
      title: "Prédiction et prise de décision",
      description: "Prédit la probabilité qu'une image soit un deepfake"
    }
  ];

  return (
    <section id="services">
      <div className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-gray-900 via-gray-800 to-purple-900 text-white overflow-hidden">
        {/* Effet de grille de fond */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Comment fonctionne notre détection
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
      </div>
    </section>
  );
};

export default ProcessFlow;
