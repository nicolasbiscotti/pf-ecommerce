import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";
import { loadImgs } from "./services";

const InputFileMultiple = ({ type }) => {
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
    <div>
      <input type="file" onChange={handleOnChangeImgs} multiple />
    </div>
  );
};

export default InputFileMultiple;
