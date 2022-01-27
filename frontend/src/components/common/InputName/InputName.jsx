import { useDispatch, useSelector } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";

const InputName = ({ nameReducer, type }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state[nameReducer]);
  const handleOnChangeName = (e) => {
    const name = e.target.value;
    dispatch(actionGenerator(type, name));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={handleOnChangeName}
        value={name}
      />
    </div>
  );
};

export default InputName;