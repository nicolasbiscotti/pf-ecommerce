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

const CreateProduct = () => {
  const { allCategories } = useGetStateDispatch(propsCategories);
  const { allSuppliers } = useGetStateDispatch(propsSuppliers);
  return (
    <CreateProductStyled>
      <InputName />
      <InputNumber placeholder="sale price" />
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
