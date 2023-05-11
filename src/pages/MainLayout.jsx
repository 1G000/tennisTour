import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/index.jsx"
import mainLayoutStyles from "../components/Mainlayout/Mainlayout.module.scss"
const MainLayout = () => {
  return (
    <div className={mainLayoutStyles.mainLayout}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
