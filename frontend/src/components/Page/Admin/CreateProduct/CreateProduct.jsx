import React, { useCallback, useEffect, useState } from "react";
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
  propsStock,
  propsSuppliers,
} from "./props";
import { Button } from "../../../common/button/Button";
import InputFile from "../../../common/InputFile/InputFile";
import InputNumber from "../../../common/InputNumber/InputNumber";
import SelectBox from "../../../common/SelectBox/SelectBox";
import TextArea from "../../../common/TextArea/TextArea";
import InputName from "../../../common/InputName/InputName";
import { useDispatch, useSelector } from "react-redux";
import { actionGenerator } from "../../../../services/actionGenerator";
import {
  SET_CP_CATEGORIES,
  SET_CP_SUPPLIERS,
  SET_CP_IMGS,
  SET_CP_MAIN_IMG,
} from "../../../../redux/reducers/createProduct/const";
import { validateCreateProduct } from "./validate";
import { reqCreteProduct } from "../../../../redux/reducers/createProduct/actions";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { allCategories } = useGetStateDispatch(propsCategories);
  const { allSuppliers } = useGetStateDispatch(propsSuppliers);
  const createProduct = useSelector((state) => state.createProduct);
  const { categories, suppliers } = useSelector((state) => state.createProduct);
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

  const handleCategories = useCallback(
    ({ dataSelectBox }) => {
      dispatch(actionGenerator(SET_CP_CATEGORIES, dataSelectBox));
    },
    [dispatch]
  );

  const handleSuppliers = useCallback(
    ({ dataSelectBox }) => {
      dispatch(actionGenerator(SET_CP_SUPPLIERS, dataSelectBox));
    },
    [dispatch]
  );

  return (
    <CreateProductStyled onSubmit={handleOnSubmitCreateProduct}>
      <InputName {...propsName} />
      <InputNumber {...propsSalePrice} />
      <InputNumber {...propsPurchesePrice} />
      <InputNumber {...propsStock} />
      <TextArea {...propsDescription} />
      <InputFile {...propsMainImg} />
      {/* <InputFile {...propsImgs} multiple /> */}
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
