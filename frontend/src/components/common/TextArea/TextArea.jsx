import { useDispatch, useSelector } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";
import { TextAreaStyled } from "./style";

const TextArea = ({ type, nameReducer, err }) => {
  const dispatch = useDispatch();
  const { description } = useSelector((state) => state[nameReducer]);
  const handleOnChange = (e) => {
    const description = e.target.value;
    dispatch(actionGenerator(type, description));
  };
  return (
    <TextAreaStyled>
      <label htmlFor={"description"}>
        Description
        {err && err.description && <span>*</span>}
      </label>
      <textarea
        name=""
        id="description"
        cols="30"
        rows="10"
        value={description}
        onChange={handleOnChange}
      ></textarea>
    </TextAreaStyled>
  );
};

export default TextArea;
