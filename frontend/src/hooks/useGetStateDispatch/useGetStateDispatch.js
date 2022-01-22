import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useGetStateDispatch = ({ nameReducer, nameState, action }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[nameReducer][nameState]);
  useEffect(() => {
    dispatch(action());
  }, [dispatch, action]);
  return { [nameState]: state };
};
