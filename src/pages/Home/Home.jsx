import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch';
import HighLight from '../../components/HighLight/HighLight';
import SearchData from '../../components/SearchData/SearchData';

const sampleWeatherData = [
    { date: 'Lundi', description: 'Ensoleillé', temperature: 25, humidity: 60 },
    { date: 'Mardi', description: 'Nuageux', temperature: 22, humidity: 65 },
    { date: 'Mercredi', description: 'Pluie légère', temperature: 18, humidity: 70 },
    { date: 'Jeudi', description: 'Pluie', temperature: 20, humidity: 85 },
    { date: 'Vendredi', description: 'Partiellement nuageux', temperature: 24, humidity: 55 },
    { date: 'Samedi', description: 'Ensoleillé', temperature: 26, humidity: 50 },
    { date: 'Dimanche', description: 'Orage', temperature: 19, humidity: 90 },
];

function Home(props) {
    

    return (
        <>
            <Navbar/>
            <HeaderSearch/>
            <HighLight weatherData={sampleWeatherData}/>
            <SearchData/>
            
        </>
    )
}

export default Home ;
