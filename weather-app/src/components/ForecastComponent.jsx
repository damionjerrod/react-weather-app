import React from 'react';
import moment from 'moment';

const ForecastComponent = ({ isLoading, weatherDataList, cityData }) => (
    
    <div>
        {
        isLoading ? <div>loading...</div> :
            <div className="forecast-wrapper">
                { 
                weatherDataList.filter(forecasts => forecasts.dt_txt.slice(11, 19) === "21:00:00").map((forecast) => (
                    <div className="forecast-container" key={ forecast.dt }>
                        <p>
                            <b>{ moment(forecast.dt_txt).format('dddd') }</b>
                        </p>
                        { 
                        forecast.weather.map((icons) => (
                            <div key={icons.id + 1}>
                                <img className="cloudy-sky" src={ `http://openweathermap.org/img/wn/${icons.icon}@2x.png` } alt="weather icon" />
                            </div>
                        ))}
                        <div>
                            <p className="temp">
                                <b>{ Math.round(forecast.main.temp) }°</b>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        }
    </div>
);

export default ForecastComponent;
