import React from "react";
import searchIcon from "./search-iconwhite.png";
import logginIcon from "./loggin-icon.png";
import cartIcon from "./cart-icon.png";
import burgerIcon from "./burger-icon.png";
import {
  Cart,
  Header,
  Login,
  Logo,
  BurgerMenu,
  NavFoot,
  NavHeader,
  NavMain,
  SearchBar,
  Shopbutton,
  UserItems,
  Shopsection,
} from "./NavBarStyle";

export default function NavBar() {
  return (
    <Header>
      <NavHeader>
        <span>English</span>
      </NavHeader>
      <NavMain>
        <nav>
          <Logo to="/home">e-kommerce</Logo>
          <SearchBar>
            <input placeholder="Search our catalog" />
            <button>
              <img src={searchIcon} alt="search icon" />
            </button>
          </SearchBar>
          <UserItems>
            <Login>
              <img src={logginIcon} alt="loggin icon" />
              <div>
                <p>Sign in</p>
                <p>Create an Account</p>
              </div>
            </Login>
            <Cart>
              <img src={cartIcon} alt="cart icon" />
              <div>
                <p>My Cart</p>
                <p>
                  <b>$0.00</b>
                </p>
              </div>
            </Cart>
          </UserItems>
        </nav>
      </NavMain>

      <NavFoot>
        <BurgerMenu>
          <img src={burgerIcon} alt="burger icon" />
          <span>MENU</span>
        </BurgerMenu>
        <Shopsection>
          <Shopbutton to="/shop">SHOP</Shopbutton>
          <Shopbutton to="/favorites">FAVORITOS</Shopbutton>
          <Shopbutton to="/favorites">SECTION I</Shopbutton>
        </Shopsection>
        <span>'Spend $120 more and get free shipping!'</span>
      </NavFoot>
    </Header>
  );
}
