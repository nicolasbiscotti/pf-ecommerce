import React, { useEffect } from "react";
import { CreateProductStyled } from "./style";
import { useGetStateDispatch } from "../../../../hooks/useGetStateDispatch/useGetStateDispatch";
import { propsCategories, propsSuppliers } from "./props";
import { Button } from "../../../common/button/Button";
import InputFile from "../../../common/InputFile/InputFile";
import InputNumber from "../../../common/InputNumber/InputNumber";
import SelectBox from "../../../common/SelectBox/SelectBox";
import TextArea from "../../../common/TextArea/TextArea";
import InputName from "../../../common/InputName/InputName";
import { useDispatch, useSelector } from "react-redux";
import { actionGenerator } from "../../../../services/actionGenerator";
import {
  SET_CREATE_PRODUCT_NAME,
  SET_CREATE_SALE_PRICE,
  SET_CREATE_PRODUCT_PURCHASE_PRICE,
  SET_CP_STOCK,
  SET_CP_DESCRIPTION,
  SET_CP_CATEGORIES,
  SET_CP_SUPPLIERS,
  SET_CP_IMGS,
  SET_CP_MAIN_IMG,
} from "../../../../redux/reducers/createProduct/const";
import { axiosPost } from "../../../../services/axios";
import { urlCloudinary } from "../../../../constants/cloudinary";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { allCategories } = useGetStateDispatch(propsCategories);
  const { allSuppliers } = useGetStateDispatch(propsSuppliers);
  const createProduct = useSelector((state) => state.createProduct);
  const { categories, suppliers } = useSelector((state) => state.createProduct);

  const handleOnChangeInputs = ({ e, type }) => {
    const value = e.target.value;
    dispatch(actionGenerator(type, value));
  };

  const handleOnSubmitCreateProduct = (e) => {
    e.preventDefault();
  };

  const handleCategories = ({ dataSelectBox }) => {
    dispatch(actionGenerator(SET_CP_CATEGORIES, dataSelectBox));
  };

  const handleSuppliers = ({ dataSelectBox }) => {
    dispatch(actionGenerator(SET_CP_SUPPLIERS, dataSelectBox));
  };

  const handleOnChangeImgs = async (e) => {
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
      dispatch(actionGenerator(SET_CP_IMGS, allUrlsImgs));
    } catch (error) {
      console.log(error);
      dispatch(actionGenerator(SET_CP_IMGS, []));
    }
  };
  const handleOnChangeImg = async (e) => {
    const imgs = e.target.files;
    const formData = new FormData();
    formData.append("file", imgs[0]);
    formData.append("upload_preset", "pf-ecommerce");
    try {
      const data = await axiosPost(urlCloudinary, formData);
      const urlImg = data.secure_url;
      dispatch(actionGenerator(SET_CP_MAIN_IMG, urlImg));
    } catch (error) {
      console.log(error);
      dispatch(actionGenerator(SET_CP_MAIN_IMG, ""));
    }
  };

  useEffect(() => {
    return () => {
      dispatch(actionGenerator(SET_CP_MAIN_IMG, ""));
      dispatch(actionGenerator(SET_CP_IMGS, []));
    };
  }, [dispatch]);

  return (
    <CreateProductStyled onSubmit={handleOnSubmitCreateProduct}>
      <InputName
        handleChange={(e) =>
          handleOnChangeInputs({ e, type: SET_CREATE_PRODUCT_NAME })
        }
      />
      <InputNumber
        placeholder="sale price"
        handleChange={(e) =>
          handleOnChangeInputs({ e, type: SET_CREATE_SALE_PRICE })
        }
      />
      <InputNumber
        placeholder="purchise price"
        handleChange={(e) =>
          handleOnChangeInputs({ e, type: SET_CREATE_PRODUCT_PURCHASE_PRICE })
        }
      />
      <InputNumber
        placeholder="stock"
        handleChange={(e) => handleOnChangeInputs({ e, type: SET_CP_STOCK })}
      />
      <TextArea
        handleChange={(e) =>
          handleOnChangeInputs({ e, type: SET_CP_DESCRIPTION })
        }
      />
      <InputFile handleChange={handleOnChangeImg} />
      <InputFile handleChange={handleOnChangeImgs} multiple />
      <SelectBox
        data={allCategories}
        title={"categories"}
        action={handleCategories}
        init={categories}
      />
      <SelectBox
        data={allSuppliers}
        title={"suppliers"}
        action={handleSuppliers}
        init={suppliers}
      />
      <Button>Crear</Button>
    </CreateProductStyled>
  );
};

export default CreateProduct;
