import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/index.jsx"

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout
