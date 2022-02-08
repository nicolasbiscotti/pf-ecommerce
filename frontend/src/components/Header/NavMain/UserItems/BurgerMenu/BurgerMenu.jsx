import React from "react";
import { useRef, useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import { BurgerMenuStyled } from "./BurgerMenuStyled";
import WelcomeDiv from "./WelcomeDiv/WelcomeDiv";

function BurgerMenu({ children, username, fetchError }) {
  const hiddenmenu = useRef(null);
  const [icon, setIcon] = useState(1);
  const handleClick = () => {
    if (hiddenmenu.current.style.display === "flex") {
      hiddenmenu.current.style.display = "none";
      setIcon(1);
    } else {
      hiddenmenu.current.style.display = "flex";
      setIcon(2);
    }
  };
  return (
    <BurgerMenuStyled>
      {icon === 1 ? (
        <RiMenu5Fill onClick={handleClick} />
      ) : (
        <div className="close-icon">
          <VscClose onClick={handleClick} />
          <div className="close-icon-vignette"></div>
        </div>
      )}
      <div ref={hiddenmenu} className={"hiddenmenu"}>
        <WelcomeDiv username={username}></WelcomeDiv>
        {children}
      </div>
    </BurgerMenuStyled>
  );
}

export default BurgerMenu;
