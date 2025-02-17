import { Outlet } from "react-router-dom"


const PrivateRouter = () => {
  return true ? <Outlet/> : <Navigate to = "/login"/>
}

export default PrivateRouter