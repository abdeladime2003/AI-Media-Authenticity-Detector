import React, { useState, useRef, useCallback } from 'react';
import { Upload, CheckCircle, XCircle, Loader, Image as ImageIcon, AlertTriangle } from 'lucide-react';

const ImageClassifierPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [aiResult, setAiResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fileInputRef = useRef(null);

  // Fonction pour gérer le drag & drop
  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  // Fonction pour traiter l'image uploadée
  const processImage = useCallback((file) => {
    // Vérification du type de fichier
    if (!file.type.match('image.*')) {
      setError("Veuillez sélectionner une image valide");
      return;
    }
    
    // Vérification de la taille du fichier (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("L'image est trop volumineuse (max: 5MB)");
      return;
    }

    // Réinitialisation des états
    setError(null);
    setImage(file);
    
    // Création de l'aperçu
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
      setCurrentStep(2); // Avance à l'étape suivante
    };
    reader.readAsDataURL(file);
  }, []);

  // Gestion du drop
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processImage(e.dataTransfer.files[0]);
    }
  }, [processImage]);

  // Gestion de la sélection de fichier
  const handleChange = useCallback((e) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      processImage(e.target.files[0]);
    }
  }, [processImage]);

  // Fonction pour ouvrir la boîte de dialogue de fichier
  const onButtonClick = () => {
    fileInputRef.current.click();
  };

  // Fonction pour gérer le choix de l'utilisateur et envoyer l'image à l'API
  const handleUserChoice = async (choice) => {
    setUserChoice(choice);
    setCurrentStep(3);
    setIsLoading(true);
    
    try {
      // Préparation des données pour l'API
      const formData = new FormData();
      formData.append('image', image);
      console.log(formData)
      // Appel à l'API Django
      const response = await fetch('http://127.0.0.1:8000/api/predict/', {  
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error("Erreur lors de l'analyse de l'image");
      }
      
      const data = await response.json();
      
      // Déterminer si l'image est réelle ou générée selon la réponse de l'API
      const classification = data.prediction === "Image réelle" ? "real" : "generated";
      console.log(response);
      console.log(data);

      setAiResult({
        classification,
        matchesUser: classification === choice
      });
      
    } catch (err) {
      console.error("Erreur:", err);
      setError("Une erreur est survenue lors de l'analyse. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
      setCurrentStep(4);
    }
  };

  // Fonction pour recommencer
  const handleReset = () => {
    setCurrentStep(1);
    setImage(null);
    setImagePreview(null);
    setUserChoice(null);
    setAiResult(null);
    setError(null);
  };

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Testez votre perception
      </h1>
      
      {/* Indicateur d'étapes */}
      <div className="mb-12">
        <div className="flex justify-between items-center w-full mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div 
              key={step}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 
                ${currentStep >= step 
                  ? "border-blue-500 bg-blue-500 text-white" 
                  : "border-gray-300 bg-white text-gray-500 dark:bg-gray-800 dark:border-gray-600"}`}
            >
              {step}
              
              {/* Ligne de connexion */}
              {step < 4 && (
                <div 
                  className={`absolute left-full w-full h-0.5 
                    ${currentStep > step ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"}`}
                ></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 px-1">
          <div className={`w-1/4 text-center ${currentStep === 1 ? "font-medium text-blue-500" : ""}`}>Upload</div>
          <div className={`w-1/4 text-center ${currentStep === 2 ? "font-medium text-blue-500" : ""}`}>Votre choix</div>
          <div className={`w-1/4 text-center ${currentStep === 3 ? "font-medium text-blue-500" : ""}`}>Analyse IA</div>
          <div className={`w-1/4 text-center ${currentStep === 4 ? "font-medium text-blue-500" : ""}`}>Résultat</div>
        </div>
      </div>
      
      {/* Contenu principal basé sur l'étape actuelle */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
        {/* Étape 1: Upload d'image */}
        {currentStep === 1 && (
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors
              ${dragActive 
                ? "border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/20" 
                : "border-gray-300 dark:border-gray-600"}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
            
            <div className="flex justify-center mb-4">
              <Upload size={48} className="text-gray-400 dark:text-gray-500" />
            </div>
            
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Uploadez une image
            </h3>
            
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Glissez-déposez votre image ici, ou cliquez pour sélectionner un fichier
            </p>
            
            <button
              onClick={onButtonClick}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Choisir une image
            </button>
            
            {error && (
              <div className="mt-4 text-red-500 flex items-center justify-center gap-2">
                <AlertTriangle size={16} />
                <span>{error}</span>
              </div>
            )}
          </div>
        )}
        
        {/* Étape 2: Faire un choix */}
        {currentStep === 2 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
              Cette image est-elle réelle ou générée par IA ?
            </h3>
            
            {imagePreview && (
              <div className="mb-6 flex justify-center">
                <img 
                  src={imagePreview} 
                  alt="Image à analyser" 
                  className="max-h-96 max-w-full rounded-lg shadow-md" 
                />
              </div>
            )}
            
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => handleUserChoice("real")}
                className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                <CheckCircle size={20} />
                Image Réelle
              </button>
              
              <button
                onClick={() => handleUserChoice("generated")}
                className="px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors flex items-center gap-2"
              >
                <ImageIcon size={20} />
                Générée par IA
              </button>
            </div>
          </div>
        )}
        
        {/* Étape 3: Analyse en cours */}
        {currentStep === 3 && (
          <div className="text-center py-12">
            <div className="animate-spin mb-4 mx-auto">
              <Loader size={48} className="text-blue-500" />
            </div>
            
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Notre IA analyse votre image...
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300">
              Veuillez patienter pendant que nous analysons l'image
            </p>
          </div>
        )}
        
        {/* Étape 4: Résultat */}
        {currentStep === 4 && aiResult && (
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
              Résultats de l'analyse
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Votre choix</h4>
                <div className={`flex items-center gap-2 text-lg font-medium ${
                  userChoice === "real" ? "text-green-600 dark:text-green-400" : "text-purple-600 dark:text-purple-400"
                }`}>
                  {userChoice === "real" ? <CheckCircle size={24} /> : <ImageIcon size={24} />}
                  {userChoice === "real" ? "Image Réelle" : "Générée par IA"}
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Verdict de l'IA</h4>
                <div className={`flex items-center gap-2 text-lg font-medium ${
                  aiResult.classification === "real" ? "text-green-600 dark:text-green-400" : "text-purple-600 dark:text-purple-400"
                }`}>
                  {aiResult.classification === "real" ? <CheckCircle size={24} /> : <ImageIcon size={24} />}
                  {aiResult.classification === "real" ? "Image Réelle" : "Générée par IA"}
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                  </span>
                </div>
              </div>
            </div>
            
            {imagePreview && (
              <div className="mb-6 flex justify-center">
                <img 
                  src={imagePreview} 
                  alt="Image analysée" 
                  className="max-h-64 max-w-full rounded-lg shadow-md" 
                />
              </div>
            )}
            
            <div className="text-center mt-6 pb-2">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium mb-6 ${
                aiResult.matchesUser 
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                  : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
              }`}>
                {aiResult.matchesUser ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Bravo ! Votre perception correspond à celle de l'IA</span>
                  </>
                ) : (
                  <>
                    <XCircle size={20} />
                    <span>Votre perception diffère de celle de l'IA</span>
                  </>
                )}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Merci pour votre contribution ! Chaque analyse aide à améliorer notre compréhension
                de la perception humaine face aux images générées par IA.
              </p>
              
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Tester une autre image
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Guide explicatif */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Comment ça marche ?
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-500">
              <Upload size={24} />
            </div>
            <h4 className="font-medium mb-1 text-gray-800 dark:text-white">Uploadez une image</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Téléchargez ou glissez-déposez n'importe quelle image que vous souhaitez analyser.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-500">
              <CheckCircle size={24} />
            </div>
            <h4 className="font-medium mb-1 text-gray-800 dark:text-white">Faites votre choix</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Donnez votre avis : est-ce une image réelle ou générée par IA ?
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-500">
              <Loader size={24} />
            </div>
            <h4 className="font-medium mb-1 text-gray-800 dark:text-white">Découvrez l'avis de l'IA</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Notre modèle TensorFlow analyse l'image en temps réel et partage sa classification.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-500">
              <ImageIcon size={24} />
            </div>
            <h4 className="font-medium mb-1 text-gray-800 dark:text-white">Contribuez à la science</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Votre participation aide à améliorer notre modèle et notre compréhension de la perception.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageClassifierPage;