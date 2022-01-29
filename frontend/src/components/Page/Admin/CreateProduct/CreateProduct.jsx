import React, { useEffect, useState } from "react";
import { CreateProductStyled } from "./style";
import { useGetStateDispatch } from "../../../../hooks/useGetStateDispatch/useGetStateDispatch";
import {
  propsCategories,
  propsDescription,
  propsImgs,
  propsMainImg,
  propsName,
  propsPurchesePrice,
  propsSalePrice,
  propsSelectCategories,
  propsSelectSuppliers,
  propsStock,
  propsSuppliers,
} from "./props";
import InputFile from "../../../common/InputFile/InputFile";
import InputFileMultiple from "../../../common/InputFileMultiple/InputFileMultiple";
import InputNumber from "../../../common/InputNumber/InputNumber";
import SelectBox from "../../../common/SelectBox/SelectBox";
import TextArea from "../../../common/TextArea/TextArea";
import InputName from "../../../common/InputName/InputName";
import { useDispatch, useSelector } from "react-redux";
import { validateCreateProduct } from "./validate";
import { reqCreteProduct } from "../../../../redux/reducers/createProduct/actions";
import { ButtonAdmin } from "../../../common/button/Button";
import { actionGenerator } from "../../../../services/actionGenerator";
import { RESET_CP } from "../../../../redux/reducers/createProduct/const";
import {
  bgButtonAdmin,
  bgHoverButtonAdmin,
  yellowLight,
} from "../../../../utilsStyles/utilsColors";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { allCategories } = useGetStateDispatch(propsCategories);
  const { allSuppliers } = useGetStateDispatch(propsSuppliers);
  const createProduct = useSelector((state) => state.createProduct);
  const resBackCreateProduct = useSelector(
    (state) => state.createProduct.resBackCreateProduct
  );
  const [objError, setObjError] = useState(
    validateCreateProduct(createProduct)
  );

  useEffect(() => {
    setObjError(validateCreateProduct(createProduct));
  }, [createProduct]);

  const handleOnSubmitCreateProduct = (e) => {
    e.preventDefault();
    if (Object.keys(objError).length === 0) {
      dispatch(reqCreteProduct(createProduct));
    }
  };

  useEffect(() => {
    if (resBackCreateProduct.msg === "Product created successfully") {
      dispatch(actionGenerator(RESET_CP));
    }
  }, [resBackCreateProduct, dispatch]);

  return (
    <CreateProductStyled onSubmit={handleOnSubmitCreateProduct}>
      <InputName {...propsName} err={objError} />
      <section className="price">
        <InputNumber {...propsSalePrice} err={objError} keyErr="salePrice" />
        <InputNumber
          {...propsPurchesePrice}
          err={objError}
          keyErr="purchasePrice"
        />
        <InputNumber {...propsStock} err={objError} keyErr="stock" />
      </section>
      <TextArea {...propsDescription} err={objError} />
      <section className="files">
        <InputFile {...propsMainImg} err={objError} keyErr="mainImg" />
        <InputFileMultiple {...propsImgs} err={objError} keyErr="imgs" />
      </section>
      <section className="selects">
        <SelectBox
          data={allCategories}
          {...propsSelectCategories}
          err={objError}
        />
        <SelectBox
          data={allSuppliers}
          {...propsSelectSuppliers}
          err={objError}
        />
      </section>
      <ButtonAdmin>Create</ButtonAdmin>
    </CreateProductStyled>
  );
};

export default CreateProduct;
