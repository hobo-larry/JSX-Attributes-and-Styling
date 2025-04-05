import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200/300/?blur";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
        alt=""
        className="food-image"
      />
      <img src={img} className="food-image" />
    </div>
  </div>,
  document.getElementById("root")
);
