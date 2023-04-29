
import React from "react";
import "./Loader copy.css";

const Loader = () => {

  const changeTextColor = function (e) {
    e.target.className="activegriditem";
}
const changeTextColor2 = function (e) {
  e.target.className="activegriditem square1";
}
  return (
    <div>


<body>
  <div className="gridcontainer">
    <div className="activegriditem square1" onClick={changeTextColor} onDoubleClick={changeTextColor2}> sff</div>
    <div className="griditem square2" onClick= {changeTextColor} onDoubleClick={changeTextColor2}>sadfa</div>
    <div className="griditem square3" onClick= {changeTextColor} onDoubleClick={changeTextColor2}>asfa</div>
    <div className="griditem square4" onClick= {changeTextColor} onDoubleClick={changeTextColor2}>asf</div>
  </div>
</body>


    </div>
  );
};

export default Loader;

