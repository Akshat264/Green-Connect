import Home from "./Pages/Home";
import About from "./Pages/About Us";
import Login from "./Pages/Login";
import ContactPage from "./Pages/Contact Us";
import "./App.css";
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="">
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/contact" element={<ContactPage/>}/>
  </Routes>
  </div>
  );
}

export default App;
