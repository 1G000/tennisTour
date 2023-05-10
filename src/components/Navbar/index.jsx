import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <ul>
            <MenuLink to="/">Главная</MenuLink>

            <MenuLink to="/roster">Ростер</MenuLink>

            <MenuLink to="/tournaments">Турниры</MenuLink>
          </ul>
        </div>
        <div>
          <h2>TennisTour</h2>
        </div>
      </nav>
    </>
  )
}

const MenuLink = ({ ...props }) => (
  <li>
    <NavLink {...props} />
  </li>
)

export default Navbar
