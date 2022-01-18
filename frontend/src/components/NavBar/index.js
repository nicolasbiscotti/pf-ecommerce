import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function NavBar() {

  return (
    <div>
      <header >
        <nav>
          <div>
            <h3><NavLink to="/shop">ECOMMERCE</NavLink></h3>
          </div>
        </nav>
      </header>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
    )
}