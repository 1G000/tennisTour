import { NavLink } from "react-router-dom"
import navBarStyles from "../Navbar/Navbar.module.scss"
const Navbar = () => {
  return (
    <>
      <nav className={navBarStyles.NavBar}>
        <div className={navBarStyles.leftSide}>
          <ul className={navBarStyles.links}>
            <MenuLink to="/roster">Ростер</MenuLink>
            <MenuLink to="/tournaments">Турниры</MenuLink>
          </ul>
        </div>
        <div className={navBarStyles.rightSide}>
          <h2>TennisTour</h2>
        </div>
      </nav>
    </>
  )
}

const MenuLink = ({ ...props }) => (
  <li className={navBarStyles.menuLink}>
    <NavLink {...props} />
  </li>
)

export default Navbar
