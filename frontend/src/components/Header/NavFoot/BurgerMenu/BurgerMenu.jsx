import React, { useState } from "react";
import { BurgerMenuStyled } from "./BurgerMenuStyled";
import { GoLocation } from "react-icons/go";
import Modal from "./Modal/Modal";
import { ButtonStyled } from "./Button/ButtonStyled";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClose = () => {
    setIsOpen(false);
  };
  return (
    <BurgerMenuStyled>
      <GoLocation
        style={{ width: "2.5rem", height: "2.5rem", marginBottom: "0.4rem" }}
      />
      <div>
        <p>Enviar a</p>
        <p>---</p>
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <ButtonStyled
          onClick={() => setIsOpen(true)}
          width="8rem"
          height="3rem"
          position="absolute"
          top="-1.5rem"
          left="-8rem"
          zindex="-1"
        ></ButtonStyled>
        <Modal open={isOpen} onClose={handleOnClose}></Modal>
      </div>
    </BurgerMenuStyled>
  );
}

export default BurgerMenu;
