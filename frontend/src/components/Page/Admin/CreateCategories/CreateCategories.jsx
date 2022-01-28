import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { urlCloudinaryCat } from "../../../../constants/cloudinary";
import { getAllCategories } from "../../../../redux/reducers/categories/actions";
import { reqCreateCategory } from "../../../../redux/reducers/crud categories/actions";
import {
  SET_CREATE_CATEGORY_IMG,
  SET_CREATE_CATEGORY_NAME,
} from "../../../../redux/reducers/crud categories/const";
import { actionGenerator } from "../../../../services/actionGenerator";
import { axiosPost } from "../../../../services/axios";
import { Button } from "../../../common/button/Button";
import InputFile from "../../../common/InputFile/InputFile";
import InputName from "../../../common/InputName/InputName";
import { CreateCategorieStyled } from "./style";

function CreateCategories() {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories.allCategories);
  const createCategories = useSelector((state) => state.createCategories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleOnChange = ({ e, type }) => {
    const value = e.target.value;
    dispatch(actionGenerator(type, value));
  };

  const handleOnChangeImg = async (e) => {
    const imgs = e.target.files;
    const formData = new FormData();
    formData.append("file", imgs[0]);
    formData.append("upload_preset", "categories");
    try {
      const data = await axiosPost(urlCloudinaryCat, formData);
      const urlImg = data.secure_url;
      dispatch(actionGenerator(SET_CREATE_CATEGORY_IMG, urlImg));
    } catch (error) {
      console.log(error);
      dispatch(actionGenerator(SET_CREATE_CATEGORY_IMG, ""));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reqCreateCategory(createCategories));
  };

  return (
    <CreateCategorieStyled>
      <h2>Categories {`(${allCategories.length})`}</h2>

      <div className="mainCategories">
        <div className="categories">
          <ul>
            {allCategories?.map((category, index) => (
              <li key={index}>
                {" "}
                {category.name}
                <Button
                  bgColor="#dc3545"
                  padding="10px 0"
                  hoverBgColor="#BB2D3B"
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="addCategories">
          <h3>Agregar Categoria </h3>
          <form action="" onSubmit={handleSubmit}>
            <InputName
              nameReducer="createCategories"
              type="SET_CREATE_CATEGORY_NAME"
            />
            <InputFile type="SET_CREATE_CATEGORY_IMG" />
            <Button type="submit" width="100%" padding="10px 0">
              Agregar
            </Button>
          </form>
        </div>
      </div>
    </CreateCategorieStyled>
  );
}

export default CreateCategories;
