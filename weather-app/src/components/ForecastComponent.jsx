import React from 'react';
import image from '../images/021-sun.png';

export const Forecast = ({ currentDay, forecast, currentTemp, apiCurrentDate, currentDate }) => {
    return (
        <div className="forecast-wrapper">
        { forecast.map((forecast) => (
            <div className="forecast-container">
                <div>
                    <p>
                        <b>{ currentDay }</b>
                    </p>
                </div>
                <div >
                    <img className="weather-img" src={ image } alt="" />
                </div>
                <div>
                    <div> <b>{forecast.main.temp}</b> </div>
                </div>
            </div>
            ))
        }
        </div>
    )
};