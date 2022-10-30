import "./Video.css";
import React, { useState } from "react";

function Video() {
  return (
    <div className="Video">
      <iframe
        className="Video__iframe"
        width="500"
        height="315"
        src={`https://www.youtube.com/embed/nrxbA9KpbjA`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="video__text">
        <h4>Video Title</h4>
      </div>
    </div>
  );
}

export default Video;
