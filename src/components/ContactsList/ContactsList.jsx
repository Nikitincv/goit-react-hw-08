import { useSelector } from "react-redux";
import { selectFilterContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import s from "./ContactsList.module.css";

const ContactsList = () => {
  const contacts = useSelector(selectFilterContacts);
  return (
    <ul className={s.contactBox}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
