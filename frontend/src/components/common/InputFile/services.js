import { namePreset, urlCloudinary } from "../../../constants/cloudinary";
import { actionGenerator } from "../../../services/actionGenerator";
import { axiosPost } from "../../../services/axios";

export const loadImg = async function ({ e, dispatch, type }) {
  const imgs = e.target.files;
  const formData = new FormData();
  formData.append("file", imgs[0]);
  formData.append("upload_preset", namePreset);
  try {
    const data = await axiosPost(urlCloudinary, formData);
    console.log(data);
    const urlImg = data.secure_url;
    dispatch(actionGenerator(type, urlImg));
  } catch (error) {
    console.log(error);
    dispatch(actionGenerator(type, ""));
  }
};
