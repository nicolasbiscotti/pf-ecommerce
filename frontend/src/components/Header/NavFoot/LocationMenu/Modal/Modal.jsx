import React, { useState } from "react";
import ReactDom from "react-dom";
import { CgClose } from "react-icons/cg";
import { ButtonStyled, ModalStyled } from "./ModalStyled";
import { lightblue } from "../../../../../utilsStyles/utilsColors";
import { useDispatch, useSelector } from "react-redux";
import { setCapital } from "../../../../../redux/reducers/geolocation/actions";
import { useEffect } from "react";
import axios from "axios";

function Modal({ isOpen, children, onClose, setIsOpen }) {
  const countryName = useSelector((store) => store.geolocation.countryName);
  const [states, setStates] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isOpen) {
      axios(`https://www.universal-tutorial.com/api/states/${countryName}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhcnJpb25kb3ZmZXJuYW5kb0BnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiI4V2RWVmpUY2JyQlhXN2dJeWx3NUhPUF9QY25lQ0duTEFGb3d5U1pDNzhTMXJJblM3cUE3SmFrY1p3ejM1bnh6dmgwIn0sImV4cCI6MTY0NDUzMzEwNH0.vV2iR3FwP6nl4Z8qlrRjZf64Y67XfDjO7PEKc95g7Hc",
        },
        redirect: "follow",
      })
        .then((response) => setStates([...response.data]))
        .catch((error) => console.log("error", error));
    }
  }, [isOpen, countryName]);

  const handleChange = (e) => {
    if (e.target.value === "") return;
    dispatch(setCapital(e.target.value));
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return ReactDom.createPortal(
    <ModalStyled>
      <div className="overlay-styles" />
      <div className="modal-styles">
        <div className="modal-container">
          <div>
            <h3>Choose your location</h3>
            <p>
              <br />
              &nbsp; Delivery options and delivery speeds may vary for different
              locations
            </p>
            <select
              defaultValue=""
              style={{ width: "80%" }}
              onChange={(e) => handleChange(e)}
            >
              <option></option>
              {states.length > 0 &&
                states.map((s) => (
                  <option key={s.state_name} value={s.state_name}>
                    {s.state_name}
                  </option>
                ))}
            </select>
          </div>
          <ButtonStyled onClick={onClose}>
            <CgClose
              style={{
                width: "2.5rem",
                height: "2.5rem",
                marginBottom: "0.4rem",
                color: lightblue,
              }}
            />
          </ButtonStyled>
        </div>
      </div>
    </ModalStyled>,
    document.getElementById("portal")
  );
}

export default Modal;
