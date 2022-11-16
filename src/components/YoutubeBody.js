import React, { useState } from "react";
import Video from "./Video";
import "./YoutubeBody.css";
import Button from "./Button.js";
function YoutubeBody() {
  const [videos, setVideos] = useState(["Sample Video"]);

  function addVideos() {
    setVideos(["Sample Component"]);
  }

  return (
    <div className="MainContent">
      <Button onClick={addVideos} text="Generate Video" />
      <div className="center-video">
        {" "}
        {videos.map((item, i) => (
          <Video text={item} key={i} />
        ))}
      </div>
    </div>
  );
}
export default YoutubeBody;
