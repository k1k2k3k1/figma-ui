import React from "react";
import { Link } from "react-router-dom";
import dolly from "../component/imegs/"

function Home(props) {
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active"> <img src=""
         height={'50px'} width={'50'}></img></a>

        <a href="#home" className="active"> PeopleSol<sup>Tm</sup></a>

        <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
        {/* <a href="javascript:void(0);" className="icon" onclick="myFunction()">
          <i className="fa fa-bars"></i>
        </a> */}
      </div>
      


      
    </div>
  );
}

export default Home;
