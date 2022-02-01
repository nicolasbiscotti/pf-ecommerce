import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";

import { loadImg } from "./services";
import { InputFileStyled } from "./style";

const InputFile = ({ type, err, keyErr }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(actionGenerator(type, ""));
    };
  }, [dispatch, type]);

  const handleOnChangeImg = async (e) => {
    if (e.target.files.length) {
      await loadImg({ e, dispatch, type });
    }
  };

  return (
    <InputFileStyled>
      <label htmlFor="image">
        {err && err[keyErr] && <span>*</span>}
        IMG
      </label>
      <input id="image" type="file" onChange={handleOnChangeImg} />
    </InputFileStyled>
  );
};

export default InputFile;
