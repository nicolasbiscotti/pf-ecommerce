import React from 'react';
import { NavLink } from 'react-router-dom';
import a from './index.module.css';
import searchIcon from './search-iconwhite.png';
import logginIcon from './loggin-icon.png';
import cartIcon from './cart-icon.png';
import burgerIcon from './burger-icon.png';

export default function NavBar() {

  return (
    <header className={a.header}>
      <div className={a.navheader}>
        <span>English</span>
      </div>
      <div className={a.mainnav}>
            <nav className={a.navmainnav}>
              <div>
                <span><NavLink to="/shop" className={a.ekommerce}>e- kommerce</NavLink></span>
              </div>
              <div className={a.searchBar}>
                <input className={a.searchInput} placeholder='Search our catalog'>
                </input>
                <button className={a.searchButton}><img src={searchIcon} alt='search icon'/></button>
              </div>
              <div className={a.loginandcart}>
                <div className={a.logginCartBox}>
                  <button className={a.logginButton}><img src={logginIcon} alt='loggin icon'/></button>
                  <div className={a.logginCartText}>
                    <p>Sign in</p>
                    <p>Create an Account</p>
                  </div>
                </div>
                <div className={a.logginCartBox +' '+ a.cartBox}>
                  <button className={a.cartButton}><img src={cartIcon} alt='cart icon'/></button>
                  <div className={a.logginCartText}>
                    <p>My Cart</p>
                    <p><b>$0.00</b></p>
                  </div>
                </div>
              </div>
            </nav>
      </div>

      <div className={a.navfoot}>
            <div className={a.burgermenu}>
              <button className={a.buttonBurger}><img src={burgerIcon} alt='burger icon'/></button>
              <span>MENU O USUARIO</span>
            </div>
            <div className={a.navshop}>
              {/* ------- A modo de ejemplo -------: para cambiar despues segun las secciones */}
              <button className={a.buttonsNavShop}>SHOP</button>
              <button className={a.buttonsNavShop}>FAVORITOS</button>
              <button className={a.buttonsNavShop}>MARCAS</button>
              <button className={a.buttonsNavShop}>RECOMENDADOS</button>
            </div>
            <div>
                <span>'Spend $120 more and get free shipping!'</span>
            </div>
      </div>
    </header>
    )
}