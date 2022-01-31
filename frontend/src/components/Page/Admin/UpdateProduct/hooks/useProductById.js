import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProductAdmin } from "../../../../../redux/reducers/updateProduct/action";

export const useProductById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailProductAdmin(id));
  }, [dispatch, id]);
  return { id };
};
