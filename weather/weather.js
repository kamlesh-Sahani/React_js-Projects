import './style.css';
import React, { useEffect, useState } from 'react';
import icon from './icon.png';

function Weather() {
    const [Cityname, setCityname] = useState('new delhi');
    const [WeatherData, setWeatherData] = useState('');

    const CityValue = (event) => {
        setCityname(event.target.value);
    };

    const fetchWeatherData = () => {
        const ApiUrl = `https://api.weatherapi.com/v1/current.json?key=a8d3f35fec004fc6bdf160839231906&q=${Cityname}&aqi=no`;
        fetch(ApiUrl)
            .then((Response) => {
                return Response.json();
            })
            .then((Data) => {
                setWeatherData(Data);
            })
            .catch((Error) => {
                console.log("data error is ", Error);
            });
    };

    useEffect(() => {
        if (Cityname) {
            fetchWeatherData();
        }
    }, [Cityname]);

    return (
        <>
            <div className='card'>
                <div className='search'>
                    <input type='text' placeholder='Search Location' onChange={CityValue} />
                </div>
                <div className='main'>
                    <div className='img'>
                        <img src={icon} alt="Weather Icon" />
                    </div>
                    <div className='cityName'>
                        <h1 className='celcius'>{WeatherData.current?.temp_c}°C</h1>
                        <span> {WeatherData.location?.name}<span>{WeatherData.location?.country}</span></span>
                    </div>
                </div>

                <div className='foot'>
                    <div className='left'>
                        <span>  {WeatherData.current?.wind_kph} km/h</span>
                        <span className='nameValue'>Wind </span>
                    </div>
                    <div className='right'>
                        <span>{WeatherData.current?.cloud}</span>
                        <span>cloud</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Weather;
