import { useDispatch } from "react-redux";
import { createImgs } from "./services";

const InputFile = ({ type, multiple }) => {
  const dispatch = useDispatch();
  const handleOnChangeImg = async (e) => {
    await createImgs.loadOneImg({ e, dispatch, type });
  };
  const handleOnChangeImgs = async (e) => {
    await createImgs.loadImgs({ e, dispatch, type });
  };
  return (
    <div>
      {multiple ? (
        <input type="file" onChange={handleOnChangeImgs} multiple />
      ) : (
        <input type="file" onChange={handleOnChangeImg} />
      )}
    </div>
  );
};

export default InputFile;
