import React, { Component } from 'react';
import './App.css';

import Nameheader from "../components/Nameheader/Nameheader";
import Profession from "../components/Profession/Profession";
import Cardlist from "../components/Cardlist/Cardlist";

class App extends Component {
    
  render() {
    
    return (
      <div className="container">
      <div className="d-flex flex-column">
          <Nameheader />
          <Profession />
          <Cardlist />
        </div>
      </div>
    );
  }
}

export default App;
