import { Formik, Form, Field } from "formik";
import { addContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          dispatch(addContact({ ...values }));
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}

            <label htmlFor="number">Number</label>
            <Field name="number" />
            {errors.number && touched.number ? (
              <div>{errors.number}</div>
            ) : null}

            <button className={s.contactFormBtn} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
