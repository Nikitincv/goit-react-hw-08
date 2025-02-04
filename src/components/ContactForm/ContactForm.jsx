import { Formik, Form, Field } from "formik";
import { addContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.formContainer}>
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
          <Form className={s.formBox}>
            <h3 className={s.title}>Contact Form</h3>
            <Field
              name="name"
              placeholder={
                errors.name && touched.name ? "Please enter name" : "Name"
              }
              className={`${s.formInput} ${
                errors.name && touched.name ? s.inputError : ""
              }`}
            />

            <Field
              name="number"
              type="text"
              placeholder={
                errors.number && touched.number
                  ? "Please enter number"
                  : "Number"
              }
              className={`${s.formInput} ${
                errors.number && touched.number ? s.inputError : ""
              }`}
            />

            <button className={s.formBtn} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
