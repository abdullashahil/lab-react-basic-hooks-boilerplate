import React, { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "../App";
import '../App.css';


function UseContext() {
  const theme = useContext(ToggleTheme);
  const [likeCount, setLikeCount] = useState(0);
  const [displaytext, setdisp] = useState(false);
  const [fr, setfr] = useState(true);

  const themeStyle = {
    backgroundColor: theme ? "white" : "black",
    color: theme ? "black" : "white",
    padding: "2rem",
    height: "500px",
    width: "1200px",
  };

  const increment = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const handleContentButtonClick = () => {
    setdisp(!displaytext);
    if (!displaytext && fr) {
      console.log("rendered");
      alert("change");
    }
  };

  useEffect(() => {
    if (!fr) {
      console.log("rendered");
      alert("change");
    }
  }, [displaytext, fr]);

  useEffect(() => {
    setfr(true);
  }, []);

  return (
    <div style={themeStyle}>
      This is made by Kalvium
      <br />
      {displaytext && <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>}
      <button className="content" onClick={handleContentButtonClick}>
        Content
      </button>

      <h2 className="like-count">{likeCount}</h2>
      <button className="like" onClick={increment}>
        Like
      </button>
    </div>
  );
}

export default UseContext;
