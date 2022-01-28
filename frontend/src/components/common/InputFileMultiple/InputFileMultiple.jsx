import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";
import { loadImgs } from "./services";
import { InputFileMultipleStyled } from "./style";

const InputFileMultiple = ({ type, err }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(actionGenerator(type, []));
    };
  }, [dispatch, type]);

  const handleOnChangeImgs = async (e) => {
    await loadImgs({ e, dispatch, type });
  };
  return (
    <InputFileMultipleStyled>
      <input id="imgs" type="file" onChange={handleOnChangeImgs} multiple />
      <label htmlFor="imgs">
        Other Images
        {err.imgs && <span>*</span>}
      </label>
    </InputFileMultipleStyled>
  );
};

export default InputFileMultiple;
