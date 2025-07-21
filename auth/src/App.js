import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
  


function App() {
  return (
    <div className="App">
      
    
       <Router>
          <Home/>
        <Routes>
          <Route path="/" element={"<h2>Welcome Home</h2>"}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
