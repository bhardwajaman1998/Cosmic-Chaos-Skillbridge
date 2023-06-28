import React from "react";
import Info from "./Info";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <p className="title">{props.title}</p>
        <p className="roles">{props.roles}</p>
        <p className="details">{props.details}</p>
      </div>
      <div className="bottom">
        <Info detailInfo={props.tel} />
        <Info detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;