import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";

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
    <div>
      <form onSubmit={handelSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
