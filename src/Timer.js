import React from "react";

function Timer(){
    const d = new Date();
let text = d.toLocaleString();
    return(
        <p>{text}</p>

    )
}
export default Timer;
