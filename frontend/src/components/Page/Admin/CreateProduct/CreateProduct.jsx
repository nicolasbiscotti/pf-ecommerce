import React from "react";
import { CreateProductStyled } from "./style";

const CreateProduct = () => {
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
      <select name="" id="">
        <option value="">suppliers</option>
      </select>
      <select name="" id="">
        <option value="">categories</option>
      </select>
    </CreateProductStyled>
  );
};

export default CreateProduct;
