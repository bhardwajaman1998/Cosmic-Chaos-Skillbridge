import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h3 className="title">{props.title}</h3>
        <p className="details">{props.details}</p>
      </div>
    </div>
  );
}

export default Card;