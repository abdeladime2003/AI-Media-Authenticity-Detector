## 🚀 Project Overview

This project focuses on building and deploying an image classification system using deep learning. It includes:

- Data augmentation and preprocessing
- Exploratory Data Analysis (EDA)
- Model training and evaluation
- A modern web interface built with React
- A REST API built with Django Rest Framework
- Dockerized deployment for portability

## 🖼️ Preprocessing

The raw images are augmented to improve model generalization. The preprocessing steps include:

- Random horizontal flipping
- Random contrast adjustment
- Random brightness changes
- Pixel normalization (scaling to [0, 1])

All transformations are applied using TensorFlow and mapped onto the datasets using tf.data API with prefetching to optimize performance.

## 📊 Exploratory Data Analysis (EDA)

Before training the model, we performed EDA to understand the structure and balance of the dataset:

- Displayed a sample of the preprocessed images
- Plotted class distribution for training and validation sets
- Verified data pipeline integrity (shape, labels, image formats)

## 🧠 Model Training

The model Resnet50 was trained on the preprocessed data using TensorFlow/Keras. Evaluation metrics such as accuracy, loss, and confusion matrix were used to validate the model’s performance.

## 🖥️ Frontend

- Built with React
- Provides a simple UI for users to upload images and view predictions
- Responsive design for all devices
- Communicates with the backend via REST API

## 🔗 Backend (API)

- Developed using Django Rest Framework (DRF)
- Exposes endpoints for image upload and prediction
- Handles preprocessing, model loading, and inference
- Secured and optimized for production use

## 🐳 Dockerized Deployment

Each part of the project is containerized:

- frontend container (React app)
- backend container (DRF API)
- model and required dependencies

Using Docker Compose, the entire application can be deployed with a single command:

```bash
docker-compose up --build
