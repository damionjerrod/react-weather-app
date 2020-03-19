import React from 'react';
import image from '../images/021-sun.png';

export const Forecast = ({ currentDay, currentTemp, apiCurrentDate, currentDate }) => {
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
                {/* <div>
                    { todaysTemp.map((temperature) => {
                        return (
                            <p
                                className="temp"
                                key={temperature.dt}
                            >
                            { temperature.main.temp }
                            </p>
                        )
                    })}
                </div> */}
            </div>
        </div>
    )
};