import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";
import { loadImgs } from "./services";

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
    <div>
      <input id="imgs" type="file" onChange={handleOnChangeImgs} multiple />
      <label htmlFor="imgs">
        Other Images
        {err.imgs && <span>*</span>}
      </label>
    </div>
  );
};

export default InputFileMultiple;
