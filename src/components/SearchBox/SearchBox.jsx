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
      <input
        className={s.formInput}
        type="text"
        onChange={handelChange}
        placeholder="Find contacts by name"
      />
    </div>
  );
};

export default SearchBox;
