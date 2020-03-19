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
      apiCurrentDate: "",
      currentDate: ""
    }
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=4180531&units=imperial&appid=54f2a785f64537fb70d2cb0b0209ba8c').then(res => 
    res.json()).then((forecastData) => {
      let allWeatherData = forecastData.list.map((temperature) => temperature);
      let apiCurrentDate = forecastData.list.map((temperature) => temperature.dt_txt);
      let currentDate = moment(new Date().toString());
      apiCurrentDate = apiCurrentDate[0].split(' ');
      currentDate = currentDate.format().split('T');
      console.log(currentDate[0]);
      console.log(apiCurrentDate[0]);
      this.setState({ 
        fiveDayTemps: allWeatherData,
        apiCurrentDate: apiCurrentDate,
        currentDate: currentDate
      })
    }).catch(console.log)
  }

  render() {
    return (
      <div>
          <Forecast className="forecast-card"
          currentDay={ this.state.currentDay }
          currentTemp={ console.log(this.state.fiveDayTemps[0]) }
          apiCurrentDate={ this.state.apiCurrentDate }
          currentDate={ this.state.currentDate }
          />
      </div>
    )
  };
}

export default App;


// yesterday: moment().subtract(1, 'd').format('dddd'),
// tomorrow: moment().add(1, 'd').format('dddd')
// moment().format('dddd')


// Image Attribution link: Icons made by <a href="https://www.flaticon.com/authors/linector" title="Linector">Linector</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>