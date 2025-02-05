import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import s from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success(` Welcome, ${name.value}`);
      })
      .catch(() => {
        toast.error("some thing wrong ");
      });
  };
  return (
    <div className={s.formContainer}>
      <form className={s.formBox} onSubmit={handelSubmit}>
        <h3 className={s.register}>Register</h3>
        <input
          className={s.formInput}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className={s.formInput}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className={s.formInput}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className={s.formBtn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
