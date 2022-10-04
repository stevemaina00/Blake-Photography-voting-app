// import React from "react";
import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';





function App(){
  const[images, setImages] = useState([]);
  const fetchApi=async()=>{
    const response = await axios.get('https://api.unsplash.com/photos/?client_id=  DZbtaFbKdLh4pktCB7lUo0yBFhlsL2jfTFq0aM-PykU');
  
    console.log(response.data)
    const data = await response.data;
    setImages(data)


  }

  return(
    <div className="container">
      <br></br>
      <button className="btn btn-primary btn-md">Get</button>
   
      <br></br>
      <div className="photos">
      <img src="https://media.wired.com/photos/5fb70f2ce7b75db783b7012c/master/pass/Gear-Photos-597589287.jpg" className="im1"></img>
      </div> 
    </div>
  )
    
  }

 

export default App
