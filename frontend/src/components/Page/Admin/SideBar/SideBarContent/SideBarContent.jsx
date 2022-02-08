import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { SideBarContentStyled } from "./style";

const SideBarContent = () => {
  const [active, setActive] = useState(false);
  const [show, setshow] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const handleClickShow = () => {
    setshow(!show);
  };

  return (
    <SideBarContentStyled>
      <GoThreeBars
        color="white"
        className={
          "bar className='hvr-bounce-to-right' " +
          (active === true ? "active" : "")
        }
        onClick={handleClick}
      />
      <nav className={active === true ? "active" : ""}>
        <div className="topSidebar">
          <FaUserCircle className="user" />
          <p>Admin</p>
        </div>
        <div className="containerLinks">
          <div className="containerProducts ">
            <p className="hvr-bounce-to-right" onClick={handleClickShow}>
              Products
            </p>
            <div
              className={show === true ? "options show" : "options"}
              onClick={handleClick}
            >
              <Link
                to="products"
                className="opt hvr-bounce-to-right"
                onClick={handleClick}
              >
                Show
              </Link>
              <Link
                to="create/product"
                className="opt hvr-bounce-to-right"
                onClick={handleClick}
              >
                Create
              </Link>
            </div>
          </div>

          <Link onClick={handleClick} className="hvr-bounce-to-right" to="">
            Bills
          </Link>
          <Link onClick={handleClick} className="hvr-bounce-to-right" to="">
            Users
          </Link>
          <Link
            onClick={handleClick}
            className="hvr-bounce-to-right"
            to="create/category"
          >
            Categories
          </Link>
          <Link onClick={handleClick} className="hvr-bounce-to-right" to="">
            Suppliers
          </Link>
          <Link onClick={handleClick} className="hvr-bounce-to-right" to="orders">
            Orders
          </Link>
        </div>
        <div className="signOut">
          <Link className="hvr-bounce-to-right" to="/">
            Log Out
          </Link>
        </div>
      </nav>
    </SideBarContentStyled>
  );
};

export default SideBarContent;
