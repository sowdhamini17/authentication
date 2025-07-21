import React ,{useState}from 'react';
import axios from "axios";
  
  const Profile = () =>  {
    const [userData,setUserData]=useState("")
    const  getProfile=()=>{
        const token=JSON.parse(localStorage.getItem('token'));
        const header={
            headers:{Authorization:`Bearer ${token}`}
             
        }
     axios.get("https://api.escuelajs.co/api/v1/auth/profile",header)
     .then((res)=>{
      setUserData(res.data);
      console.log("profile data",res)})
     .catch((err)=>{console.log("error accured",err)})
    }
    
	return (
	  <div>
      <h1>users</h1>
      <button onClick={getProfile}>profile date</button>
      {/* <button onClick={getLogout}>LOGOUT</button> */}
      <div>
        <ul>
          <li>{userData?.name||"NA"}</li>
          <li>{userData?.email||"NA"}</li>
          <li>{userData?.role||"NA"}</li>
          <img src={userData?.avatar} alt="profile"></img>
        </ul>
      </div>
	  </div>
	);
  }
  
  export default Profile;
  