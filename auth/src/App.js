import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Protectedroutes from "./components/Protectedroutes";
  


function App() {
  return (
    <div className="App">
      
    
       <Router>
          <Home/>
        <Routes>
          <Route element={<Protectedroutes/>}>
              <Route path="/Profile" element={<Profile/>}></Route>
          </Route>
          <Route path="/" element={"<h2>Welcome Home</h2>"}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
