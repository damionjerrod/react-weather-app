import React from 'react';
import image from '../images/021-sun.png';

export const Forecast = ({ currentDay, forecast }) => {
    return (
        <div className="forecast-wrapper">
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
                    <p className="temp">
                        <b>76° |</b> 86°
                    </p>
                </div>
            </div>
        </div>
    )
};