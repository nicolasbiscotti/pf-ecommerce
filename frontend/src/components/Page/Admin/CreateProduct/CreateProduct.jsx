import React from "react";
import { CreateProductStyled } from "./style";
import { useGetStateDispatch } from "../../../../hooks/useGetStateDispatch/useGetStateDispatch";
import { propsCategories, propsSuppliers } from "./props";
import { Button } from "../../../common/button/Button";
import InputFile from "../../../common/InputFile/InputFile";
import InputNumber from "../../../common/InputNumber/InputNumber";
import SelectBox from "../../../common/SelectBox/SelectBox";
import TextArea from "../../../common/TextArea/TextArea";
import InputName from "../../../common/InputName/InputName";
import { useDispatch } from "react-redux";
import { actionGenerator } from "../../../../services/actionGenerator";
import {
  SET_CREATE_PRODUCT_NAME,
  SET_CREATE_PRODUCT_PURCHASE_PRICE,
} from "../../../../redux/reducers/createProduct/const";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { allCategories } = useGetStateDispatch(propsCategories);
  const { allSuppliers } = useGetStateDispatch(propsSuppliers);
  const handleOnChangeName = (e) => {
    const name = e.target.value;
    dispatch(actionGenerator(SET_CREATE_PRODUCT_NAME, name));
  };
  const handleOnChangePurchePrice = (e) => {
    const purchesePrice = e.target.value;
    dispatch(
      actionGenerator(
        SET_CREATE_PRODUCT_PURCHASE_PRICE,
        parseInt(purchesePrice)
      )
    );
  };
  return (
    <CreateProductStyled>
      <InputName handleChange={handleOnChangeName} />
      <InputNumber
        placeholder="sale price"
        handleChange={handleOnChangePurchePrice}
      />
      <InputNumber placeholder="purchase price" />
      <InputNumber placeholder="stock" />
      <TextArea />
      <InputFile />
      <InputFile />
      <SelectBox data={allCategories} title={"categories"} />
      <SelectBox data={allSuppliers} title={"suppliers"} />
      <Button>Crear</Button>
    </CreateProductStyled>
  );
};

export default CreateProduct;
