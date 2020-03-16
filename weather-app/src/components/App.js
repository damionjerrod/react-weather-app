import React from 'react';
import moment from 'moment';
import { Forecast } from './ForecastComponent';
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: [],
      currentDay: moment().format('dddd'),
      fiveDayTemps: [],

      // yesterday: moment().subtract(1, 'd').format('dddd'),
      // tomorrow: moment().add(1, 'd').format('dddd')
    }
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=4180531&units=imperial&appid=54f2a785f64537fb70d2cb0b0209ba8c').then(res => 
    res.json()).then((forecastData) => {
      let weatherData = forecastData.list.map((temperature) => {
        return temperature
      })
      console.log(weatherData);
      let day = moment.unix(1584403200);
      console.log(`dt is: ${day}`)
      this.setState({ fiveDayTemps: weatherData })
    }).catch(console.log)
  }

  render() {
    return (
      <div>
          <Forecast className="forecast-card"
          currentDay={ this.state.currentDay }
          todaysTemp={ this.state.fiveDayTemps }
          />
      </div>
    )
  };
}

export default App;

// Image Attribution link: Icons made by <a href="https://www.flaticon.com/authors/linector" title="Linector">Linector</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>