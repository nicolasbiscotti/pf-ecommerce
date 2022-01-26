import { useDispatch, useSelector } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";

const InputNumber = ({ placeholder, type, nameReducer, nameKey }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state[nameReducer][nameKey]);
  const handleOnChange = (e) => {
    const number = e.target.value;
    dispatch(actionGenerator(type, number));
  };
  return (
    <div>
      <input
        id={placeholder}
        type="number"
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
      <label htmlFor={placeholder}></label>
    </div>
  );
};

export default InputNumber;
