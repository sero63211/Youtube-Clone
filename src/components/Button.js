import React from "react";
import "./YoutubeBody.css";

function Button(props) {
  return (
    <button className="Video__button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
