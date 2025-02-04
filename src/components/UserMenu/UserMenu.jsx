import { useDispatch } from "react-redux";
import s from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
import { MdLogout } from "react-icons/md";

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button className={s.logout} onClick={() => dispatch(logOut())}>
        <MdLogout className={s.icon} />
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
