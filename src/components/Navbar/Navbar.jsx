import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudSun}  from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.logo}>
            <FontAwesomeIcon icon={faCloudSun}/>

            Demain Paris
        </div>
        <div style={styles.burger} onClick={toggleMenu}>
          <span style={styles.line}></span>
          <span style={styles.line}></span>
          <span style={styles.line}></span>
        </div>
      </nav>
    </>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    height: '60px',
    color: '#EAFF00',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: blur('10px'),
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  burger: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '24px',
    width: '30px',
    padding: '2rem'
  },
  line: {
    backgroundColor: '#EAFF00',
    height: '3px',
    width: '100%',
    borderRadius: '2px',
  },
  menu: {
    position: 'absolute',
    top: '60px',
    right: '20px',
    backgroundColor: '#333',
    padding: '10px',
    borderRadius: '8px',
    listStyle: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  menuItem: {
    margin: '10px 0',
  },
  menuLink: {
    textDecoration: 'none',
    color: '#2CE3FF',
    fontSize: '1rem',
  },
};

export default Navbar;
