import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { setFilter } from "../../redux/filters/slice";
const SearchBox = () => {
  const dispatch = useDispatch();
  const handelChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div className={s.SearchBoxContainer}>
      <label htmlFor="text">Find contacts by name</label>
      <input type="text" onChange={handelChange} />
    </div>
  );
};

export default SearchBox;
