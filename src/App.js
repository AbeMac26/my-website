import "./App.css";
import { Navbar } from "./components/navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Pics from "./components/pages/Picture";
import Music from "./components/pages/Music";


function App() {
  return (
    
    <BrowserRouter>  
    <div className="App">
      <Navbar />
    </div>
    <div style={{textAlign:"-webkit-center"}}>
    <Routes>
      <Route exact path ="/" element={<Home/>}/>
      <Route exact path ="/pics" element={<Pics/>}/>
      <Route exact path ="/music" element={<Music/>}/>
    </Routes>
    </div>
    <div className="footer">
	  	<span>Abel Macias&#169; e-mail: abe_mac@ymail.com Tel:(818) 205-4901</span>
	  </div>
    </BrowserRouter> 
  
  );
}

export default App;
