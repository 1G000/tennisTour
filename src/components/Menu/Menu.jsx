import { NavLink } from "react-router-dom";
import navBarStyles from "../Menu/Menu.module.scss";

const Menu = () => {
  return (
    <>
      <nav className={navBarStyles.NavBar}>
        <div className={navBarStyles.leftSide}>
          <ul className={navBarStyles.links}>
            <MenuLink to="/tournaments">Турниры</MenuLink>
            <MenuLink to="/roster">Ростер</MenuLink>
          </ul>
        </div>
        <div className={navBarStyles.rightSide}>
          <h2>TornadoTennisTour</h2>
        </div>
      </nav>
    </>
  );
};

const MenuLink = ({ ...props }) => (
  <li className={navBarStyles.menuLink}>
    <NavLink {...props} />
  </li>
);

export default Menu;
