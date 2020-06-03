import React from 'react';
import ForecastContainer from './ForecastContainer';
import '../App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="app">
          <ForecastContainer className="forecast-card" />
      </div>
    )
  };
}

export default App;

// Image Attribution link: Icons made by <a href="https://www.flaticon.com/authors/linector" title="Linector">Linector</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>