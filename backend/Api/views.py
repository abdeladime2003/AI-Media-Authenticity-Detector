import numpy as np
import tensorflow as tf
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from django.http import JsonResponse
from PIL import Image
model_instance = None
def load_model():
    global model_instance
    if model_instance is None:
        print("Chargement du modèle...")
        model_instance = tf.keras.models.load_model(r'mon_modele.keras')
    return model_instance
class ModelLoader:
    def __init__(self):
        self.model = None
    
    def get_model(self):
        if self.model is None:
            self.model = tf.keras.models.load_model(r'mon_modele.keras')
        return self.model
model_loader = ModelLoader()
class PredictImageView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    def preprocess_image(self, image):
        image = tf.image.random_flip_left_right(image)  
        image = tf.image.random_contrast(image, 0.8, 1.2)  
        image = tf.image.random_brightness(image, 0.1)  
        image = tf.cast(image, tf.float32) / 255.0  
        return image
    def post(self, request):
        try:
            file_obj = request.FILES.get('image')
            if not file_obj:
                return JsonResponse({'error': 'Aucune image fournie'}, status=400)
            img = Image.open(file_obj)
            img = img.resize((224, 224))
            img_array = np.array(img)
            img_array = np.expand_dims(img_array, axis=0)
            img_array = self.preprocess_image(img_array)
            model = model_loader.get_model()
            
            prediction = model.predict(img_array)
            prediction = prediction[0][0]
            print(f"Prédiction: {prediction}")
            
            result = "Image réelle" if prediction > 0.5 else "Image fake"
            return JsonResponse({'prediction': result})
            
        except Exception as e:
            print(f"Erreur lors de la prédiction: {str(e)}")
            return JsonResponse({'error': str(e)}, status=500)