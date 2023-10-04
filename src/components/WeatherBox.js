import { useState, useRef, useEffect } from "react";
import ClearImg from "../images/clear.png";
import RainImg from "../images/rain.png";
import SnowImg from "../images/snow.png";
import CloudImg from "../images/cloud.png";
import HazeImg from "../images/mist.png";


function WeatherBox({ container, weather }) {

    container.current.style.setProperty('height','590px');

    const weatherImg = useRef();
    const [weatherSrc, setWeatherSrc] = useState("");

    const handleImg = () => {
        switch (weather.weather[0].main) {
            case 'Clear':
                setWeatherSrc(ClearImg);
                break;

            case 'Rain':
                setWeatherSrc(RainImg);
                break;

            case 'Snow':
                setWeatherSrc(SnowImg);
                break;

            case 'Clouds':
                setWeatherSrc(CloudImg);
                break;

            case 'Haze':
                setWeatherSrc(HazeImg);
                break;

            default:
                setWeatherSrc("");
        }
    }

    useEffect(() => {
        handleImg();
    }, [weather]);

    return (
        <>
            <div className="weather-box fadeIn">
                <img src={weatherSrc} ref={weatherImg}/>
                <p className="temperature">
                    {`${parseInt(weather.main.temp)}`}<span>°C</span>
                </p>
                <p className="description">
                    {`${weather.weather[0].description}`}
                </p>
            </div>

            <div className="weather-details fadeIn">
                <div className="humidity">
                    <i className="fa-solid fa-water"></i>
                    <div className="text">
                        <span>{`${weather.main.humidity}%`}</span>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="wind">
                    <i className="fa-solid fa-wind"></i>
                    <div className="text">
                        <span>{`${parseInt(weather.wind.speed)}Km/h`}</span>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WeatherBox;