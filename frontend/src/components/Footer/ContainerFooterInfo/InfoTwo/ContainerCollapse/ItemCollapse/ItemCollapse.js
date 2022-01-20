import React from "react";
import { ItemCollapseStyled } from "./styles";
import { IoMdArrowDropdown } from "react-icons/io";

export const ItemCollapse = ({ text, list, active, setActive }) => {
  return (
    <ItemCollapseStyled>
      <h3 onClick={() => (active === text ? setActive("") : setActive(text))}>
        {text}
        <IoMdArrowDropdown />
      </h3>

      <ul className={active === text ? "show" : ""}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ItemCollapseStyled>
  );
};
