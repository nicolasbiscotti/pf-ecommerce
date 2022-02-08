import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsNames } from "../../../redux/reducers/autocomplete/actions";
import { NavMainStyled } from "./NavMainStyled";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import UserItems from "./UserItems/UserItems.jsx";

function NavMain() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productsNames);
  useEffect(() => {
    let mounted = true;
    if (mounted) dispatch(fetchAllProductsNames());
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
