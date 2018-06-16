import React from 'react';

const Portfolio = ({ toggleChoice, toggleColor }) => {
  return (
    <div className="card-collapse portfolio" data-toggle="collapse" data-target="#portfolioCollapse" onClick={() => toggleChoice("portfolio")}>
      <i className="fas fa-file-code d-block" style={{color: toggleColor("portfolio")}}></i><p>Portfolio</p>
    </div>
  );
}

export default Portfolio;