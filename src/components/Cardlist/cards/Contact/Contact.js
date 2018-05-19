import React from 'react';

const Contact = ({ toggleChoice, toggleColor }) => {
  return (
    <div className="card-collapse contact" data-toggle="collapse" data-target="#contactCollapse" onClick={() => toggleChoice("contact")}>
      <i className="fas fa-envelope d-block" style={{color: toggleColor("contact")}}></i><p>Contact</p>
    </div>
  );
}

export default Contact;