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
  }, []); // L'effet s'exécute une seule fois après le montage

  return (
    <div style={styles.container}>
      <img
        style={styles.header}
        src="./header-weather.jpg"
        alt="weather-data-meteo"
      />

      <div style={styles.formdate}>
        <div style={styles.inputdatewheather}>
          <label style={styles.label} htmlFor="begin">Date de début</label>
          <input type='date' placeholder='Choisir une date de début' style={styles.input} />
        </div>

        <div style={styles.inputdatewheather}>
          <label style={styles.label} htmlFor="end">Date de fin</label>
          <input type='date' placeholder='Choisir une date de fin' style={styles.input} />
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  header: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    zIndex: 0,
  },
  formdate: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    zIndex: 100,
    width: '100%',
    maxWidth: '1200px',
    padding: '0 20px',
    flexWrap: 'wrap'
  },
  inputdatewheather: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 10px',
    borderRadius:'50%'

  },
  label: {
    color: '#EAFF00',
    fontSize: '1rem',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    maxWidth: '200px',
  },
  btnvalidate: {
    padding: '10px 20px',
    backgroundColor: '#EAFF00',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
  },
};

export default HeaderSearch;
