import { urlCloudinary } from "../../../constants/cloudinary";
import { actionGenerator } from "../../../services/actionGenerator";
import { axiosPost } from "../../../services/axios";

export const loadImgs = async ({ e, dispatch, type }) => {
  const imgs = e.target.files;
  const allUrlsImgs = [];
  try {
    for (let i = 0; i < imgs.length; i++) {
      const element = imgs[i];
      const formData = new FormData();
      formData.append("file", element);
      formData.append("upload_preset", "pf-ecommerce");
      const data = await axiosPost(urlCloudinary, formData);
      const urlImg = data.secure_url;
      allUrlsImgs.push(urlImg);
    }
    dispatch(actionGenerator(type, allUrlsImgs));
  } catch (error) {
    console.log(error);
    dispatch(actionGenerator(type, []));
  }
};
