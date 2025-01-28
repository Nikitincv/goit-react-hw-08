import { useSelector } from "react-redux";
import { selectFilterContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

const ContactsList = () => {
  const contacts = useSelector(selectFilterContacts);
  return (
    <ul>
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
