import React from 'react';

import "./Nameheader.css";

const Nameheader = () => {
  return (
    <div className="Nameheader text-white p-5">
      <p><em>Hey, I'm</em></p>
      <span><h1>BIPIN SHRESTHA</h1></span>
      <div className="account_links">
        <a href="https://www.linkedin.com/in/bipinstha/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/bipinstha7" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://twitter.com/bipinstha7" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
      </div>
    </div>
  );
}

export default Nameheader;