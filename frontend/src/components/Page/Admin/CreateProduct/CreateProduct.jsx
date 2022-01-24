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
  SET_CREATE_SALE_PRICE,
  SET_CREATE_PRODUCT_PURCHASE_PRICE,
  SET_CP_STOCK,
} from "../../../../redux/reducers/createProduct/const";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { allCategories } = useGetStateDispatch(propsCategories);
  const { allSuppliers } = useGetStateDispatch(propsSuppliers);
  const handleOnChangeInputs = ({ e, type }) => {
    const value = e.target.value;
    dispatch(actionGenerator(type, value));
  };
  return (
    <CreateProductStyled>
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
