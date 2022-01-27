import { useDispatch, useSelector } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";

const InputName = ({ nameReducer, type, err }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state[nameReducer]);
  const handleOnChangeName = (e) => {
    const name = e.target.value;
    dispatch(actionGenerator(type, name));
  };
  return (
    <div>
      <input id="name" type="text" onChange={handleOnChangeName} value={name} />
      <label htmlFor="name">
        Name
        {err.name && <span>*</span>}
      </label>
    </div>
  );
};

export default InputName;
