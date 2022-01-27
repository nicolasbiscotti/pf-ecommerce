import { useDispatch, useSelector } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";
import { toUpperCaseFirstCharacter } from "../../../services/services";

const InputNumber = ({ placeholder, type, nameReducer, nameKey, err }) => {
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
        onChange={handleOnChange}
        value={value}
      />
      <label htmlFor={placeholder}>
        {toUpperCaseFirstCharacter(placeholder)}
        {err[nameKey] && <span>*</span>}
      </label>
    </div>
  );
};

export default InputNumber;
