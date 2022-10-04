// import React from "react";
import { useState } from "react";
import axios from "axios"




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
      <div className="photos"></div>
    </div>
  )
    
  }

 

export default App
