import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UNSELECT_NAME_SEARCH } from "../../../redux/reducers/filters/consts";
import {
  actionCreator,
  fetchAllCategories,
  fetchAllProducts,
} from "../../../redux/reducers/products/actions";
import BigCont from "./Containers/BigCont/BigCont";
import Filterbar from "./Containers/Filterbar/Filterbar";
import { ShopStyled } from "./styles";

export default function Shop() {
  const dispatch = useDispatch();
  const isDefault = useSelector((store) => store.filters.isDefault);

  isDefault && dispatch(fetchAllProducts());
  dispatch(fetchAllCategories());

  useEffect(() => {
    return () => {
      dispatch(actionCreator(UNSELECT_NAME_SEARCH));
    };
  }, [dispatch]);

  return (
    <ShopStyled>
      <Filterbar />
      <BigCont />
    </ShopStyled>
  );
}
