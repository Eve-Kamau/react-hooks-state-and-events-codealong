import React, { useState }from "react";

function Toggle() {
  const [isOn, setisOn] = useState(false);

  function handleClick() {
    setisOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";

  return <button 
         style={{ background: color }} 
         onClick={handleClick}>
        {isOn ? "ON" : "OFF"}
        </button>;
}

export default Toggle;


// function Toggle() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log("clicked");
//   }
//   function handleOffClick(e) {
//     e.preventDefault();
//     console.log("OFF");
//   }
//   return <button onClick={handleClick} onBlur={handleOffClick}>OFF</button>;
// }