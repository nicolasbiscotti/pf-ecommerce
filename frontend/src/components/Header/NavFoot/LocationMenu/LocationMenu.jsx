import React, { useState } from "react";
import { LocationMenuStyled } from "./LocationMenuStyled";
import { GoLocation } from "react-icons/go";
import Modal from "./Modal/Modal";
import { ButtonStyled } from "./Button/ButtonStyled";
import { useEffect } from "react";
import axios from "axios";

function LocationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClose = () => {
    setIsOpen(false);
  };

  const [country, setCountry] = useState("");
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      axios.get("https://ipapi.co/json/").then((response) => {
        setCountry(response.data.country_capital);
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <LocationMenuStyled>
      <GoLocation />
      <div>
        <p>Enviar a</p>
        <p>{country.length > 0 ? country : "---"}</p>
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
    </LocationMenuStyled>
  );
}

export default LocationMenu;
