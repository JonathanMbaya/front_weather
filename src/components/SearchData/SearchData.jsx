import React from 'react'
import LineChart from '../Graphs/LineChart';
import BarChart from '../Graphs/BarChart';
import ScatterPlot from '../Graphs/ScatterPlot';

const linedata = [
    { year: "2000", temperature: 15.2 },
    { year: "2001", temperature: 15.8 },
    { year: "2002", temperature: 16.1 },
];

const bardata = [
    { month: "January", temperature: 5 },
    { month: "February", temperature: 6 },
];

const scatterdata = [
    { precipitation: 12, windSpeed: 3.5, temperature: 25 },
    { precipitation: 8, windSpeed: 4.2, temperature: 22 },
];
  
  

function SearchData(props) {

    return (
        <>
            <div>
                <LineChart linedata={linedata}/>
            </div>
            <div>
                <BarChart bardata={bardata}/>
            </div>
            <div>
                <ScatterPlot scatterdata={scatterdata}/>
            </div>

        </>
    )
}


export default SearchData;