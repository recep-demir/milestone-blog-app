import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/about" element = {<About/>}/>







    </Routes>
    <Footer/>
    
    
    
    </BrowserRouter>
  )
}

export default AppRouter