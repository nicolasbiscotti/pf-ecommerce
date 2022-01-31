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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ ...product, id }));
  };

  return (
    <UpdateProductStyled>
      <form action="" onSubmit={handleOnSubmit}>
        <InputName {...propsName} />
        <section className="price">
          <InputNumber {...propsSalePrice} />
          <InputNumber {...propsPurchesePrice} />
          <InputNumber {...propsStock} />
          <InputNumber {...propsDiscount} />
        </section>
        <TextArea {...propsDescription} />
        <section className="files">
          <InputFile {...propsMainImg} />
          <InputFileMultiple {...propsImgs} />
        </section>
        <section className="selects">
          <SelectBox data={allCategories} {...propsSelectCategories} />
          <SelectBox data={allSuppliers} {...propsSelectSuppliers} />
        </section>
        <ButtonAdmin>Save</ButtonAdmin>
      </form>
    </UpdateProductStyled>
  );
}
