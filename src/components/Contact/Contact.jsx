import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>name:{name}</p>
      <p>number:{number}</p>
      <button onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
