import { useDispatch, useSelector } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";

const TextArea = ({ type, nameReducer, err }) => {
  const dispatch = useDispatch();
  const { description } = useSelector((state) => state[nameReducer]);
  const handleOnChange = (e) => {
    const description = e.target.value;
    dispatch(actionGenerator(type, description));
  };
  return (
    <div>
      <textarea
        name=""
        id="description"
        cols="30"
        rows="10"
        value={description}
        onChange={handleOnChange}
      ></textarea>
      <label htmlFor={"description"}>
        Description
        {err.description && <span>*</span>}
      </label>
    </div>
  );
};

export default TextArea;
