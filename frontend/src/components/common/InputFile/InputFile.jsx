import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";

import { loadImg } from "./services";

const InputFile = ({ type }) => {
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
      <input type="file" onChange={handleOnChangeImg} />
    </div>
  );
};

export default InputFile;
