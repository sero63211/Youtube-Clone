import React, { useState } from "react";
import Video from "./Video";
import "./YoutubeBody.css";
import Button from "./Button.js";
function YoutubeBody() {
  const [components, setComponents] = useState(["Sample Component"]);

  function addComponent() {
    setComponents([...components, "Sample Component"]);
  }

  return (
    <div className="MainContent">
      <Button onClick={addComponent} text="Add Video" />
      {components.map(() => (
        <Video />
      ))}
    </div>
  );
}
export default YoutubeBody;
