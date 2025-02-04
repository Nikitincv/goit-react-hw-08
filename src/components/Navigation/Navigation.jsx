import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoginIn, selectUser } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";
import { MdHome, MdImportContacts } from "react-icons/md";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoginIn);
  const user = useSelector(selectUser);

  return (
    <nav className={s.navBox}>
      <NavLink className={s.link} to="/">
        {" "}
        <MdHome className={s.icon} />
        Home
      </NavLink>
      {isLoggedIn && <h3 className={s.welcome}>Welcome {user.name}</h3>}
      {isLoggedIn && (
        <NavLink className={s.link} to="/contacts">
          {" "}
          <MdImportContacts className={s.icon} /> Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
