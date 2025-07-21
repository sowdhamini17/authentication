import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import "./Home.css";

const Home = () => {
  const token=localStorage.getItem("token")
  const navigate=useNavigate()
 
  const handleLogout=()=>{
      // setUserData()
      navigate("/")
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
