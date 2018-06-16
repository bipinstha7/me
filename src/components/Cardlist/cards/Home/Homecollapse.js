import React from 'react';

import './Homecollapse.css';

const Homecollapse = () => {
  return (
    <div id="homeCollapse" className="collapse show" data-parent="#accordion">
      <div className="card-background card rounded-0">
        <div className="card-body text-white p-5">
          <h1>Welcome to my page</h1><br/>
          <p className="lead py-3">I'm a web developer by passion and an engineer by profession.</p>
          <h6>LEARNING,</h6><h6 className="second"> PROBLEM SOLVING </h6><h6 className="third"> AND DEBUGGING </h6><h6 className="fourth">IS MY DAILY ROUTINE OF WORK.</h6>
        </div>
      </div>
      <div className="card-second-background card rounded-0">
        <div className="card-body px-5 pb-5">
          <h2>Here's what I have done so far ...</h2>
          <hr/>
          <p>Most important: I have learned to code.</p>
          <p>Learned Node js, React and MongDB - MERN stack </p>
          <p>Developed Problem Solving Skills</p>
          <p>Built some cool projects - chekout on my portfolio</p>
          <hr/>
          <p>Tought primary kids - share knowledge and love</p>
          <p>Got engineering degree - how to think and solve problems</p>
          <p>Gone Trekking - travel as much as you can</p>
          <p className="d-inline pr-2">Won domestic cricket league</p>
            <i className="fas fa-trophy pl-1"></i> 
            <i className="fas fa-trophy pl-1"></i> 
            <i className="fas fa-trophy pl-1"></i> 
            <br/>
          <p className="d-inline pr-2">Lost football turnament</p>
            <i className="far fa-frown pl-1"></i> 
            <i className="far fa-frown pl-1"></i> 
            <i className="far fa-frown pl-1"></i> 
          
        </div>
      </div>
    </div>
  );
}

export default Homecollapse;