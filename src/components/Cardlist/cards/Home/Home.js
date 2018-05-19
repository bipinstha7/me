import React from 'react';

const Home = ({ toggleChoice, toggleColor }) => {
  return (
    <div className="card-collapse home" data-toggle="collapse" data-target="#homeCollapse" onClick={() => toggleChoice("home")}>
      <i className="fas fa-user d-block" style={{color: toggleColor("home")}}></i><p>Me</p>
    </div>
  );
}

export default Home;