import React from 'react';
import image from '../images/021-sun.png';

export const Forecast = ({ currentDay, todaysTemp }) => {
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
                        {/* { todaysTemp[0] }° */}
                    </p>
                </div>
            </div>
        </div>
    )
};