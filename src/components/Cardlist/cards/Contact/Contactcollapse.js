import React from 'react';

import "./Contactcollapse.css";

const Contactcollapse = () => {
  return (
    <div id="contactCollapse" className="collapse" data-parent="#accordion">
      <div className="card-second-background card rounded-0">
        <div className="card-body pt-5 text-center">
          <h1>Get in touch</h1>
          <p className="lead">I would love to be a part of your team</p>
          <p className="lead">Go ahead, shoot me a text and let's connect</p>
        </div>
      </div>
      <div className="card-background card rounded-0">
        <div className="card-body py-4 text-white text-center">
          <h4 className="pb-3">you can reach me through </h4>
          <a href="https://www.linkedin.com/in/bipinstha/" target="_blank" rel="noopener noreferrer"> Linkedin<i className="fab fa-linkedin"></i></a> <br/>
          <a className="github" href="https://github.com/bipinstha7" target="_blank" rel="noopener noreferrer"> GitHub<i className="fab fa-github"></i></a> <br/>
          <a className="twitter" href="https://twitter.com/bipinstha7" target="_blank" rel="noopener noreferrer"> Twitter<i className="fab fa-twitter"></i></a>
          <br/>
          <div className="border_style pt-3"><i className="fas fa-circle"></i></div>
          <div className="border_style"><i className="fas fa-circle"></i></div>
          <div className="border_style"><i className="fas fa-circle"></i></div>
        </div>  
      </div>
    </div>
  );
}

export default Contactcollapse;