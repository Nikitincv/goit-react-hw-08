import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import { MdOutlineAppRegistration, MdOutlineLogin } from "react-icons/md";

const AuthNav = () => {
  return (
    <div className={s.navBox}>
      <NavLink className={s.link} to="/register">
        <MdOutlineAppRegistration className={s.icon} />
        Register
      </NavLink>
      <NavLink className={s.link} to="/login">
        <MdOutlineLogin className={s.icon} />
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
