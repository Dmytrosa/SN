
import React from "react";
import "./Loader copy.css";

const Loader = () => {

  const changeTextColor = function (e) {
    debugger
    e.target.className="activegriditem";
}
const changeTextColor2 = function (e) {
  debugger
  e.target.className="activegriditem square1";
}
  return (
    <div>


<body>
  <div class="gridcontainer">
    <div class="activegriditem square1" onClick={changeTextColor} onDoubleClick={changeTextColor2}> sff</div>
    <div class="griditem square2" onClick= {changeTextColor} onDoubleClick={changeTextColor2}>sadfa</div>
    <div class="griditem square3" onClick= {changeTextColor} onDoubleClick={changeTextColor2}>asfa</div>
    <div class="griditem square4" onClick= {changeTextColor} onDoubleClick={changeTextColor2}>asf</div>
  </div>
</body>


    </div>
  );
};

export default Loader;

