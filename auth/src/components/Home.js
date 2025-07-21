import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  const token=localStorage.getItem("token")
 
  const handleLogout=()=>{
      // setUserData()
      localStorage.removeItem("token");
      alert("log out successfull")
    }
  return (
    <div id="home">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      {token ?
      <p onClick={handleLogout}>Logout</p>:<Link to="/login">Login</Link>
      }
      
      
    </div>
  );
};

export default Home;
