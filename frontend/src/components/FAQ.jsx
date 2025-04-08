import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Qu'est-ce qu'un deepfake ?",
      answer:
        "Un deepfake est un média synthétique dans lequel une personne dans une image ou une vidéo est remplacée par l'apparence de quelqu'un d'autre à l'aide de l'IA. Cela peut être utilisé à des fins bénignes ou malveillantes.",
    },
    {
      question: "Quels types de fichiers puis-je téléverser ?",
      answer:
        "Actuellement, nous prenons en charge le téléversement d’images au format JPEG et PNG. Le support vidéo arrive bientôt !",
    },
    {
      question: "Mes données sont-elles en sécurité ?",
      answer:
        "Oui, nous priorisons la confidentialité des utilisateurs. Tous les fichiers sont traités de manière sécurisée et supprimés après l’analyse. Aucune donnée personnelle n’est conservée.",
    },
    {
      question: "Puis-je utiliser ce système à des fins commerciales ?",
      answer:
        "Actuellement, ce système est destiné uniquement à des fins éducatives et de recherche. Pour un usage commercial, veuillez nous contacter pour obtenir une licence.",
    },
  ];

  return (
    <section id ="faq" className="py-20 bg-gradient-to-tr from-gray-900 via-gray-800 to-purple-900 mb-0">

      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Foire aux questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
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
                <div className="mt-3 text-gray-300">
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
