import { urlCloudinary } from "../../../constants/cloudinary";
import { actionGenerator } from "../../../services/actionGenerator";
import { axiosPost } from "../../../services/axios";

export const loadImg = async function ({ e, dispatch, type }) {
  const imgs = e.target.files;
  const formData = new FormData();
  formData.append("file", imgs[0]);
  formData.append("upload_preset", "pf-ecommerce");
  try {
    const data = await axiosPost(urlCloudinary, formData);
    const urlImg = data.secure_url;
    dispatch(actionGenerator(type, urlImg));
  } catch (error) {
    console.log(error);
    dispatch(actionGenerator(type, ""));
  }
};
