import React from "react";
import "./Circle.scss";

export default function Circle() {
  return (
    <>
      <h1>circle</h1>

      <div className="circle-container">
        <div className="circles red" />
        <div className="circles yellow" />
        <div className="circles green" />
      </div>
    </>
  );
}
