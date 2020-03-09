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
      forecasts: []
      // yesterday: moment().subtract(1, 'd').format('dddd'),
      // tomorrow: moment().add(1, 'd').format('dddd')
    }
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=4180531&appid=54f2a785f64537fb70d2cb0b0209ba8c').then(res => 
    res.json()).then((forecastData) => {
      this.setState({ forecasts: forecastData })
    }).catch(console.log)
  }

  render() {
    return (
      <div>
        {/* {this.state.forecasts.map((forecast) => ( */}
          <Forecast className="forecast-card"
          currentDay={ this.state.currentDay }
          forecasts={ this.state.forecasts }
          />
        {/* ))} */}
      </div>
    )
  };
}

export default App;

// Image Attribution link: Icons made by <a href="https://www.flaticon.com/authors/linector" title="Linector">Linector</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>