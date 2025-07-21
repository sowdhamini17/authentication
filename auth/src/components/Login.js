 import React,{useState} from "react";
 import axios  from  "axios";
import { useNavigate } from "react-router-dom";

 const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
     const navigate=useNavigate(); 
     const handleSubmit=()=>{
        const payload={
            email:email,
            password:password}
      //   console.log(payload)

    axios.post("https://api.escuelajs.co/api/v1/auth/login",payload)
      .then((res)=>{
      localStorage.setItem("token",JSON.stringify(res.data.access_token))
      navigate("/Profile")
      alert("logged in ")
      console.log("susscessfully logged in",res)
    })
    .catch((err)=>{console.log("login failed",err)})
     }  

   
    return(<>
      <div id="login_container">
        <h3>LOGIN</h3>
        <input  value={email} type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
         <input  value={password} type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
         <button type="submit" onClick={handleSubmit}>submit</button>
        
      </div>
    </>)


}
export default Login