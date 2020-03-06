import React from 'react';
import moment from 'moment';
import { Forecast } from './ForecastComponent';
import '../App.css';

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    yesterday: moment().subtract(1, 'd').format('dddd'),
    today: moment().format('dddd'),
    tomorrow: moment().add(1, 'd').format('dddd')
  }
}

  render() {
    return (
      <div>
        {/* <Forecast className="forecast-card"
          currentDay={this.state.yesterday}
        /> */}
        <Forecast className="forecast-card"
          currentDay={this.state.today}
        
        />
        {/* <Forecast className="forecast-card"
          currentDay={this.state.tomorrow}
        /> */}
      </div>
    )
  };
}

export default App;

// Image Attribution link: Icons made by <a href="https://www.flaticon.com/authors/linector" title="Linector">Linector</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>