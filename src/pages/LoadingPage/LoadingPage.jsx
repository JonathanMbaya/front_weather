import React, { useEffect, useState } from 'react';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev - 1);
      setProgress((prev) => prev + 20);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate('/weather');
    }, 5000);

    // return () => {
    //   clearInterval(timer);
    //   clearTimeout(timeout);
    // };
  }, [navigate]);

  return (
    <div style={styles.container}>
      <div style={styles.background} />
      <div style={styles.textloading}>
        <FontAwesomeIcon icon={faCloudSun} size="6x" />
        <h1>Demain Paris</h1>
        {/* <h2 style={styles.counterText}>Redirection dans {counter} secondes...</h2> */}
      </div>
      <div style={styles.progressBarContainer}>
        <div style={{ ...styles.progressBar, width: `${progress}%` }} />
      </div>
      {/* <button style={styles.skipButton} onClick={() => navigate('/weather')}>
        Passer
      </button> */}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/header-weather.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: '-1',
  },
  textloading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#EAFF00',
  },
  progressBarContainer: {
    width: '80%',
    height: '10px',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    overflow: 'hidden',
    marginTop: '20px',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#EAFF00',
    transition: 'width 0.5s ease-in-out',
  },
  counterText: {
    marginTop: '10px',
    fontSize: '1.5rem',
    color: '#FFFFFF',
  },
  skipButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#EAFF00',
    border: 'none',
    borderRadius: '5px',
    color: '#333',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default LoadingPage;
