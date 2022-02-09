import React, { useState } from "react";
import { LocationMenuStyled } from "./LocationMenuStyled";
import { GoLocation } from "react-icons/go";
import Modal from "./Modal/Modal";
import { ButtonStyled } from "./Button/ButtonStyled";
import { useEffect } from "react";
import { getGeoUser } from "../../../../redux/reducers/geolocation/actions";
import { useDispatch, useSelector } from "react-redux";

function LocationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClose = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();
  const country = useSelector((store) => store.geolocation);

  useEffect(() => {
    let mounted = true;
    if (mounted && Object.keys(country).length === 0) {
      dispatch(getGeoUser());
    }
    return () => {
      mounted = false;
    };
    //eslint-disable-next-line
  }, []);

  return (
    <LocationMenuStyled>
      <GoLocation />
      <div>
        <p>Enviar a</p>
        <p>{Object.keys(country).length ? country.countryCapital : "---"}</p>
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
