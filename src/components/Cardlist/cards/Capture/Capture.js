import React from 'react';

const Capture = ({ toggleChoice, toggleColor }) => {
  return (
    <div className="card-collapse capture" data-toggle="collapse" data-target="#captureCollapse" onClick={() => toggleChoice("capture")}>
      <i className="fas fa-camera d-block" style={{color: toggleColor("capture")}}></i><p>Capture</p>
    </div>
  );
}

export default Capture;