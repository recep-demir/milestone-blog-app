

const PrivateRouter = () => {
  return true ? <Outlet/> : <Navigate to = "/login"/>
}

export default PrivateRouter