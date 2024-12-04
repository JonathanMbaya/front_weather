import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight}  from '@fortawesome/free-solid-svg-icons';
import './style.css'; // CSS spécifique pour le composant

function HighLight({ weatherData }) {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    return (
        <div className="highlight-container">
            <button className="arrow left-arrow" onClick={scrollLeft}>
                <FontAwesomeIcon icon={faArrowLeft} />            
            </button>
            <div className="highlight-slider" ref={sliderRef}>
                {weatherData.map((day, index) => (
                    <div key={index} className="highlight-day">
                        <h2>{day.temperature}°C</h2>
                        <h3>{day.date}</h3>
                        <p>{day.description}</p>
                        <p>Humidité : {day.humidity}%</p>
                    </div>
                ))}
            </div>
            <button className="arrow right-arrow" onClick={scrollRight}>
                <FontAwesomeIcon icon={faArrowRight} />            
            </button>
        </div>
    );
}



export default HighLight;
