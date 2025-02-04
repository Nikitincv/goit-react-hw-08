import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import s from "./Contact.module.css";
import { FiPhone } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.contactBox}>
      <p className={s.contactTitle}>Contact</p>
      <p className={s.contactItem}>
        <LuUserRound className={s.icon} />
        Name: {name}
      </p>
      <p className={s.contactItem}>
        <FiPhone className={s.icon} />
        Number: {number}
      </p>
      <button
        className={s.contactBtn}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
