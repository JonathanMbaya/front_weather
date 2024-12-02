import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Remplacez par votre URL d'API
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Ajouter un intercepteur pour les requêtes ou réponses si nécessaire
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('HTTP Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
