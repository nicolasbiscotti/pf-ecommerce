import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../redux/reducers/products/actions";
import { NavMainStyled } from "./NavMainStyled";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import UserItems from "./UserItems/UserItems.jsx";

function NavMain() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.products.products.products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <NavMainStyled>
      <nav>
        <Logo to="/" span="e-kommerce" />
        <Search data={data} />
        <UserItems />
      </nav>
    </NavMainStyled>
  );
}

export default NavMain;

//acá tengo que pasarle la data de productos al searchbar para que
// pueda mostrar las sugerencias
