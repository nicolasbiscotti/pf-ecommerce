import React from "react";
import { useGetStateDispatch } from "../../../../hooks/useGetStateDispatch/useGetStateDispatch";
import { Button } from "../../../common/button/Button";
import SelectBox from "../../../common/SelectBox/SelectBox";
import { propsCategories, propsSuppliers } from "./props";
import { CreateProductStyled } from "./style";

const CreateProduct = () => {
  const { allCategories } = useGetStateDispatch(propsCategories);
  const { allSuppliers } = useGetStateDispatch(propsSuppliers);
  return (
    <CreateProductStyled>
      <input type="text" placeholder="name" />
      <input type="number" placeholder="sale price" />
      <input type="number" placeholder="purchase price" />
      <input type="number" placeholder="stock" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="description"
      ></textarea>
      <input type="file" />
      <input type="file" />
      <SelectBox data={allCategories} title={"categories"} />
      <SelectBox data={allSuppliers} title={"suppliers"} />
      <Button>Crear</Button>
    </CreateProductStyled>
  );
};

export default CreateProduct;
