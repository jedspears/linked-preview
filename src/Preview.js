import React, { useState } from 'react';
import './Preview.css';

function Preview(props) {
  return (
    <div className="previewContainer">
      <p>{props.displayLink}</p>
      <h1>{props.title}</h1>
      <p>{props.location} - {props.position} - {props.company}</p>
      <p>{props.snippet}</p>
    </div>
  );
}

export default Preview;