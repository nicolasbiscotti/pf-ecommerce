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
import { Button } from "../../../common/button/Button";
import InputFile from "../../../common/InputFile/InputFile";
import InputFileMultiple from "../../../common/InputFileMultiple/InputFileMultiple";
import InputNumber from "../../../common/InputNumber/InputNumber";
import SelectBox from "../../../common/SelectBox/SelectBox";
import TextArea from "../../../common/TextArea/TextArea";
import InputName from "../../../common/InputName/InputName";
import { useDispatch, useSelector } from "react-redux";
import { validateCreateProduct } from "./validate";
import { reqCreteProduct } from "../../../../redux/reducers/createProduct/actions";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { allCategories } = useGetStateDispatch(propsCategories);
  const { allSuppliers } = useGetStateDispatch(propsSuppliers);
  const createProduct = useSelector((state) => state.createProduct);
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

  return (
    <CreateProductStyled onSubmit={handleOnSubmitCreateProduct}>
      <InputName {...propsName} err={objError} />
      <InputNumber {...propsSalePrice} err={objError} />
      <InputNumber {...propsPurchesePrice} err={objError} />
      <InputNumber {...propsStock} err={objError} />
      <TextArea {...propsDescription} err={objError} />
      <InputFile {...propsMainImg} err={objError} />
      <InputFileMultiple {...propsImgs} err={objError} />
      <SelectBox
        data={allCategories}
        {...propsSelectCategories}
        err={objError}
      />
      <SelectBox data={allSuppliers} {...propsSelectSuppliers} err={objError} />
      <Button>Crear</Button>
    </CreateProductStyled>
  );
};

export default CreateProduct;
