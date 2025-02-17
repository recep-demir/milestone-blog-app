import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import PrivateRouter from "./PrivateRouter";
import NewBlog from "../pages/NewBlog";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/auth" element = {<PrivateRouter/>}>
        <Route path ="" element={<NewBlog/>} />       
        </Route>


    </Routes>
    <Footer/>
    
    
    
    </BrowserRouter>
  )
}

export default AppRouter