import { Navigate, Outlet } from "react-router-dom"


const PrivateRouter = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet/> : <Navigate to = "/login"/>
}

export default PrivateRouter