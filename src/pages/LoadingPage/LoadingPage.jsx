import React, { useEffect, useState } from 'react';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5); // Compteur de 5 secondes
  const [progress, setProgress] = useState(0); // Progression de la barre (0-100)

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev - 1);
      setProgress((prev) => prev + 20); // Étant donné 5 secondes, chaque seconde représente 20%.
    }, 1000);

    // Rediriger après 5 secondes
    const timeout = setTimeout(() => {
      navigate('/weather');
    }, 5000);

    // Nettoyage des timers
    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div style={styles.container}>
      <div style={styles.textloading}>
        <FontAwesomeIcon icon={faCloudSun} size="6x" />
        <h1>Demain Paris</h1>
      </div>

      {/* Barre de progression */}
      <div style={styles.progressBarContainer}>
        <div style={{ ...styles.progressBar, width: `${progress}%` }} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: '#2CE3FF',
  },
  textloading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#EAFF00',
  },
  progressBarContainer: {
    width: '80%', // Largeur de la barre
    height: '10px',
    backgroundColor: '#e0e0e0', // Couleur de fond de la barre
    borderRadius: '5px',
    overflow: 'hidden',
    marginTop: '20px',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#EAFF00', // Couleur de la progression
    transition: 'width 0.5s ease-in-out', // Transition douce
  },
  counterText: {
    marginTop: '10px',
    fontSize: '1rem',
    color: '#333',
  },
};

export default LoadingPage;
