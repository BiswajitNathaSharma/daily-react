import React from "react";

let myColors = ["red", "green", "purpel", "blue"]
function Btn(myColors) {

    
    return(
        <>
        <button
            className="outline-none px-3 py-1 rounded-xl"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            red
          </button>
          <h1>{myColors}</h1>
        </>
    );
}
export default Btn;