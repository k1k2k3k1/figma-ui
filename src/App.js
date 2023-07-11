import { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { auth } from "./component/firebase";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Home from "./Home";
import TableData from "./component/form/TableData";
import Dashboard from "./component/Dashboard";
function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div classNameName="App">
      
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/itdesk" element={<TableData />} />
          <Route path="/itgraph" element={<Dashboard/>} />
         
        </Routes>
      </Router>
      
      <div className="App">

  <div className="canvas" >
  
  </div>
  

	</div>

      
    </div>
  );
}

export default App;

