import React from 'react';
import ForecastComponent from './ForecastComponent';

class ForecastContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //   currentDay: moment().format('dddd'),
            isLoading: true,
            weatherData: [],
        }
    }

    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=4180531&units=imperial&appid=54f2a785f64537fb70d2cb0b0209ba8c')
        .then(res => res.json())
        .then((weatherData) => {
            this.setState({
              isLoading: false,
              weatherData: weatherData
            })
        }).catch(console.log)
    }
    
    render(){

        const { city } = this.state.weatherData;
        const { list } = this.state.weatherData;

        return (
            <div>
                <ForecastComponent
                    isLoading={ this.state.isLoading }
                    weatherDataList={ list }
                    cityData={ city }
                />
            </div>
        )
    }
};

export default ForecastContainer;