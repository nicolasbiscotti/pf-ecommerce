import { StyledLayout } from "./styled";
import Header from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLocalCart } from "../../../redux/reducers/cart/actions";
import { useEffect } from "react";

export default function Layout() {
  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.getItem("cart") !== undefined && localStorage.getItem("cart")){
      dispatch(setLocalCart(localStorage.getItem("cart")))
    }
  },[dispatch])

  const cart = useSelector(state=>state.cart);

  window.onbeforeunload=(e)=>{
    localStorage.setItem("cart",JSON.stringify(cart));
  }

  return (
    <StyledLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledLayout>
  )
}
