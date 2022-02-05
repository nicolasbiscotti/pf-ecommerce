import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetStateDispatch } from "../../../../hooks/useGetStateDispatch/useGetStateDispatch";
import { updateProduct } from "../../../../redux/reducers/updateProduct/action";
import { ButtonAdmin } from "../../../common/button/Button";
import InputFile from "../../../common/InputFile/InputFile";
import InputFileMultiple from "../../../common/InputFileMultiple/InputFileMultiple";
import InputName from "../../../common/InputName/InputName";
import InputNumber from "../../../common/InputNumber/InputNumber";
import SelectBox from "../../../common/SelectBox/SelectBox";
import TextArea from "../../../common/TextArea/TextArea";
import { validateCreateProduct } from "../CreateProduct/validate";
import { useProductById } from "./hooks/useProductById";
import { propsCategories, propsSuppliers } from "./propHooks";
import { propsImgs, propsMainImg } from "./propsFiles";
import {
  propsDiscount,
  propsPurchesePrice,
  propsSalePrice,
  propsStock,
} from "./propsInputNumber";
import { propsName } from "./propsName";
import { propsSelectCategories, propsSelectSuppliers } from "./propsSelects";
import { propsDescription } from "./propsTextarea";
import { UpdateProductStyled } from "./style";

export default function UpdateProduct() {
  const dispatch = useDispatch();
  const { id } = useProductById();
  const { allCategories } = useGetStateDispatch(propsCategories);
  const { allSuppliers } = useGetStateDispatch(propsSuppliers);
  const product = useSelector((state) => state.updateProduct);

  const [objError, setObjError] = useState(validateCreateProduct(product));

  useEffect(() => {
    setObjError(validateCreateProduct(product));
  }, [product]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(objError).length === 0) {
      dispatch(updateProduct({ ...product, id }));
    }
  };

  return (
    <UpdateProductStyled>
      <form action="" onSubmit={handleOnSubmit}>
        <InputName {...propsName} err={objError} />
        <section className="price">
          <InputNumber {...propsSalePrice} err={objError} keyErr="salePrice" />
          <InputNumber
            {...propsPurchesePrice}
            err={objError}
            keyErr="purchasePrice"
          />
          <InputNumber {...propsStock} err={objError} keyErr="stock" />
          <InputNumber {...propsDiscount} err={objError} keyErr="discount" />
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
        <ButtonAdmin>Save</ButtonAdmin>
      </form>
    </UpdateProductStyled>
  );
}
