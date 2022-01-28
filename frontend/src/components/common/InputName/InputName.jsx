import { useDispatch, useSelector } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";
import { InputNameStyled } from "./style";

const InputName = ({ nameReducer, type, err }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state[nameReducer]);
  const handleOnChangeName = (e) => {
    const name = e.target.value;
    dispatch(actionGenerator(type, name));
  };
  return (
    <InputNameStyled>
      <label htmlFor="name">
        Name
        {err.name && <span>*</span>}
      </label>
      <input id="name" type="text" onChange={handleOnChangeName} value={name} />
    </InputNameStyled>
  );
};

export default InputName;
