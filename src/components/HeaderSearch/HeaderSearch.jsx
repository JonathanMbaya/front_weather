import React, { useEffect } from 'react';
import axios from 'axios';

function HeaderSearch(props) {
  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(response => {
        console.log('Réponse de l\'API :', response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la requête API :', error);
      });
  }, []); // Le tableau vide [] signifie que l'effet s'exécute une seule fois après le montage

  return (
    <div style={styles.container}>
      <img
        style={styles.header}
        src="./header-weather.jpg"
        alt="weather-data-meteo"
      />

      <div style={styles.formdate}>
        <div style={styles.inputdatewheather}>
          <label htmlFor="begin">Date de début</label>
          <input type='date' placeholder='Choisir une date de début' />
        </div>

        <div style={styles.inputdatewheather}>
          <label htmlFor="end">Date de fin</label>
          <input type='date' placeholder='Choisir une date de fin' />
        </div>

        <input style={styles.btnvalidate} type="submit" value="Analyser la météo" />
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  header: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  formdate: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 100,
    width: '100%',
  },
  inputdatewheather: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnvalidate: {
    color: '#EAFF00',
    backgroundColor: '#2CE3FF',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default HeaderSearch;
