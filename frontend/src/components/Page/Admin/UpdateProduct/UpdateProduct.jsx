import { useGetStateDispatch } from "../../../../hooks/useGetStateDispatch/useGetStateDispatch";
import { ButtonAdmin } from "../../../common/button/Button";
import InputFile from "../../../common/InputFile/InputFile";
import InputFileMultiple from "../../../common/InputFileMultiple/InputFileMultiple";
import InputName from "../../../common/InputName/InputName";
import InputNumber from "../../../common/InputNumber/InputNumber";
import SelectBox from "../../../common/SelectBox/SelectBox";
import TextArea from "../../../common/TextArea/TextArea";
import { propsCategories, propsSuppliers } from "./propHooks";
import { propsImgs, propsMainImg } from "./propsFiles";
import {
  propsPurchesePrice,
  propsSalePrice,
  propsStock,
} from "./propsInputNumber";
import { propsName } from "./propsName";
import { propsSelectCategories, propsSelectSuppliers } from "./propsSelects";
import { propsDescription } from "./propsTextarea";
import { UpdateProductStyled } from "./style";

export default function UpdateProduct() {
  const { allCategories } = useGetStateDispatch(propsCategories);
  const { allSuppliers } = useGetStateDispatch(propsSuppliers);
  return (
    <UpdateProductStyled>
      <form action="">
        <InputName {...propsName} />
        <section className="price">
          <InputNumber {...propsSalePrice} />
          <InputNumber {...propsPurchesePrice} />
          <InputNumber {...propsStock} />
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
        <ButtonAdmin>Create</ButtonAdmin>
      </form>
    </UpdateProductStyled>
  );
}
