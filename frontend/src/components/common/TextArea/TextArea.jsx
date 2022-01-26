import { useDispatch, useSelector } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";

const TextArea = ({ type, nameReducer }) => {
  const dispatch = useDispatch();
  const { description } = useSelector((state) => state[nameReducer]);
  const handleOnChange = (e) => {
    const description = e.target.value;
    dispatch(actionGenerator(type, description));
  };
  return (
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="description"
      value={description}
      onChange={handleOnChange}
    ></textarea>
  );
};

export default TextArea;
