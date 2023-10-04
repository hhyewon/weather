import React from 'react';
import './style.css';
import { useState, useEffect, useRef } from "react";
import WeatherBox from "./components/WeatherBox";
import NotFound from "./components/NotFound";
import SearchBox from "./components/SearchBox";

const APIKey = '16048450580f653b384b96a107dd3f4d';

function App() {

    const [city, setCity] = useState("");
    const [weatherJSON, setWeatherJSON] = useState("");
    const container = useRef();

    const handleInputChange = (e) => {
        setCity(e.target.value);
    }

    const handleButtonClick = () => {
        if (city === "")
            return;
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            .then(response => response.json())
            .then(json => {
                setWeatherJSON(json)
            });
    }

    return (
        <div className="container" ref={container}>
            <SearchBox
                city = {city}
                onInputChange = {handleInputChange}
                onButtonClick = {handleButtonClick}
            />
        {
            `${weatherJSON}` === `` ?
                <></> :
                `${weatherJSON.cod}` === `404` ?
                    <NotFound container = {container}/>
                    : <WeatherBox
                        container = {container}
                        weather = {weatherJSON} />

        }
        </div>
    );

}

export default App;
