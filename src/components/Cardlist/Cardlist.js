import React, { Component } from 'react';

import Home from './cards/Home/Home';
import Portfolio from './cards/Portfolio/Portfolio';
import Capture from './cards/Capture/Capture';
import Contact from './cards/Contact/Contact';

import Homecollapse from "./cards/Home/Homecollapse";
import Portfoliocollapse from "./cards/Portfolio/Portfoliocollapse";
import Capturecollapse from "./cards/Capture/Capturecollapse";
import Contactcollapse from "./cards/Contact/Contactcollapse";


class Cardlist extends Component {
  state = {
    active: "home"
  }

  toggleChoice = (choice) => {
    if (this.state.active === choice) {
      this.setState({active: null});
    } else {
      this.setState({active: choice});
    }
  } 

  toggleColor = (choice) => {
    if (this.state.active === choice) {
      return "#551700";
    }
    return "";
  }


  render () {
    return (
      <div id="accordion">
        <div className="d-flex align-items-stretch text-center">     
          <Home toggleChoice={this.toggleChoice} toggleColor={this.toggleColor} />
          <Portfolio toggleChoice={this.toggleChoice} toggleColor={this.toggleColor} />
          <Capture toggleChoice={this.toggleChoice} toggleColor={this.toggleColor} />
          <Contact toggleChoice={this.toggleChoice} toggleColor={this.toggleColor}/>
        </div>
    
        <Homecollapse />
        <Portfoliocollapse />
        <Capturecollapse />
        <Contactcollapse />
      </div>
    );
  } 
}

export default Cardlist;