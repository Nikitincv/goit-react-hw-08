import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactsList from "../components/ContactsList/ContactsList";
import SearchBox from "../components/SearchBox/SearchBox";
import { selectIsError, selectLoading } from "../redux/contacts/selectors";
import { ErrorMessage } from "formik";
import Loader from "../components/Loader/Loader";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactsList />
      {isError && <ErrorMessage error={isError} />}
      {isLoading && <Loader />}
    </div>
  );
};

export default ContactsPage;
