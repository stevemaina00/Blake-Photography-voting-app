import React from "react";
import  Card from "./Card"


function App(){

  return(
    <>
    <h1>Blake Photography Voting App</h1>
    <div className="container">
      <br></br>
      <button className="btn btn-primary btn-md">
        Get Photos
      </button>
      <br></br>

    </div>
    <Card />
    

    </>
  )
}
export default App;
