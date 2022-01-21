import React from "react";
import { useSelector } from "react-redux";
import SelectBox from "../../../common/SelectBox/SelectBox";
import { CreateProductStyled } from "./style";

const CreateProduct = () => {
  const allCategories = useSelector(({ allCategories }) => allCategories);
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
      <SelectBox data={allCategories} />
      <SelectBox />
    </CreateProductStyled>
  );
};

export default CreateProduct;
