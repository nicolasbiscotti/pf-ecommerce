import { useDispatch, useSelector } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";
import { toUpperCaseFirstCharacter } from "../../../services/services";
import { InputNumberSyled } from "./style";

const InputNumber = ({
  placeholder,
  type,
  nameReducer,
  nameKey,
  err,
  keyErr,
  className,
}) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state[nameReducer][nameKey]);
  const handleOnChange = (e) => {
    const number = e.target.value;
    dispatch(actionGenerator(type, number));
  };
  return (
    <InputNumberSyled className={className}>
      <label htmlFor={placeholder}>
        {toUpperCaseFirstCharacter(placeholder)}
        {err && err[keyErr] && <span>*</span>}
      </label>
      <input
        id={placeholder}
        type="number"
        onChange={handleOnChange}
        value={value}
        min={0}
      />
    </InputNumberSyled>
  );
};

export default InputNumber;
