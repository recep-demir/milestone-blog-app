import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import PrivateRouter from "./PrivateRouter";
import NewBlog from "../pages/NewBlog";
import Footer from "../components/Footer";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Detail from "../pages/Detail";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="" element = {<PrivateRouter/>}>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/new-blog" element={<NewBlog/>} />
          <Route path="/detail" element={<Detail/>} />
         
          
        </Route>
        <Route path="*" element={<NotFound/>} />
        


        

    </Routes>
    <Footer/>
    
    
    
    </BrowserRouter>
  )
}

export default AppRouter