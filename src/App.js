// import React from "react";
import { useState } from "react";
// import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './Components/Nav'

function App(){

 

  const [count, setCount] = useState(0);

  return(
    <div className="container">
    <Nav />
      <br></br>
      {/* <button className="btn btn-primary btn-md">Get</button> */}
   
      <br></br>
      <div className="photos">
        <div className="p">
          <div>
      <p>{count} likes</p>
      <button  onClick={() => setCount(count + 1)}>
      <span class="glyphicon">&#xe125;</span>
        
      </button>
    </div>
      </div> 
      </div>
    </div>
  ) 
    
  }

 

export default App
