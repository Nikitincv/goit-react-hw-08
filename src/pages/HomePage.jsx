import { RiContactsBookLine } from "react-icons/ri";
import s from "../components/UserMenu/UserMenu.module.css";

const HomePage = () => {
  return (
    <div className={s.homeContainer}>
      <div className={s.homeBox}>
        <RiContactsBookLine className={s.homeIcon} />
        <h1 className={s.homeTitle}>Contact Book</h1>
        <h3 className={s.homeSubTitle}>Create your contact list</h3>
      </div>
    </div>
  );
};

export default HomePage;
