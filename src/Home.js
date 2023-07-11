import React from "react";
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link } from "react-router-dom";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

import Dashboard from "./component/Dashboard";

function Home(props) {
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <a href="#" className="active"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR15_ZwgwYU4u5Hx4M9DE4P8NNikTGa0LsHrg&usqp=CAU" height={'50px'} width={'50'}></img></a>

        <a href="#" className="active"> Peouple</a>

        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
          <i className="fa fa-bars"></i>
        </a>
      </div>
      <div className="dashboard">
  <Link to="/itdesk" className="dashboard-link">
    <ContactsIcon className="contact-icon" />
    <span className="dashboard-text">It Tickets</span>
  </Link>
</div>
<div className="dashboard">
<Link to="/itgraph" className="dashboard-link">
  <ContactsIcon className="contact-icon" />
  <span className="dashboard-text">It Dashboard</span>
  
</Link>
</div>

    
      

      <Dashboard/>
      {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
    </div>
  );
}

export default Home;
