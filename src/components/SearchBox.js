import WeatherBox from "./WeatherBox";
import NotFound from "./NotFound";
import { useState } from "react";
import React from "react";
import '../style.css';

const APIKey = '16048450580f653b384b96a107dd3f4d';

function SearchBox({city, onInputChange, onButtonClick}) {
    return (
        <div className="search-box">
            <i className="fa-solid fa-location-dot"></i>
            <input type="text"
                   placeholder="Enter your location"
                   value={city}
                   onChange={onInputChange}
            />
            <button onClick={onButtonClick} className="fa-solid fa-magnifying-glass"></button>
        </div>
    );
}

export default SearchBox;