import "./Video.css";
import React, { useState, useEffect } from "react";

function Video() {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Graphic Novel Animation Showreel│ALEKS & SHANTU",
      url: "JqThhdPDwLg",
    },
    {
      id: 2,
      title: "ZDF | Schliemann: Der Schatz des Priamos | Doku Highlights",
      url: "FTrDtOEAkhQ",
    },
    {
      id: 3,
      title: "React in 100 Seconds",
      url: "Tn6-PIqc4UM",
    },
  ]);
  var randomNumber = Math.floor(Math.random() * videos.length);

  return (
    <div className="Video">
      <iframe
        className="Video__iframe"
        width="500"
        height="315"
        src={`https://www.youtube.com/embed/${videos[randomNumber].url}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="video__text">
        <h4> {videos[randomNumber].title}</h4>
      </div>
      <div className="video__text">
        <h2>{}</h2>
      </div>
    </div>
  );
}

export default Video;
