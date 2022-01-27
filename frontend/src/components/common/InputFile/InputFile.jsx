import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";

import { loadImg } from "./services";

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
    <div>
      <input id="image" type="file" onChange={handleOnChangeImg} />
      <label htmlFor="image">
        Image
        {err.mainImg && <span>*</span>}
      </label>
    </div>
  );
};

export default InputFile;
