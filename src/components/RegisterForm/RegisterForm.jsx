import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";

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
        toast.success("Success Register");
      })
      .catch(() => {
        toast.error("some thing wrong ");
      });
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
