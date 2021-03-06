import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UNSELECT_FILTERS } from "../../../redux/reducers/filters/consts";
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
  const nameSearch = useSelector((store) => store.filters.nameSearch);

  nameSearch === undefined && dispatch(fetchAllProducts());
  dispatch(fetchAllCategories());

  useEffect(() => {
    return () => {
      dispatch(actionCreator(UNSELECT_FILTERS));
    };
  }, [dispatch]);

  return (
    <ShopStyled>
      <Filterbar />
      <BigCont />
    </ShopStyled>
  );
}
