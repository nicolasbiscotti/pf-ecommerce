import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";

import { loadImg } from "./services";
import { InputFileStyled } from "./style";

const InputFile = ({ type, err }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(actionGenerator(type, ""));
    };
  }, [dispatch, type]);

  const handleOnChangeImg = async (e) => {
    await loadImg({ e, dispatch, type });
  };

  return (
    <InputFileStyled>
      <label htmlFor="image">
        Image
        {err.mainImg && <span>*</span>}
      </label>
      <input id="image" type="file" onChange={handleOnChangeImg} />
    </InputFileStyled>
  );
};

export default InputFile;
