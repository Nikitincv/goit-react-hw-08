import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import s from "./LoginForm.module.css";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    dispatch(
      login({
        email: email.value,
        password: password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Success log-in");
      })
      .catch(() => {
        toast.error("some thing wrong ");
      });
  };
  return (
    <div className={s.formContainer}>
      <form className={s.formBox} onSubmit={handelSubmit}>
        <h3 className={s.login}>Login</h3>

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
          Login
        </button>
      </form>
    </div>
  );
};
