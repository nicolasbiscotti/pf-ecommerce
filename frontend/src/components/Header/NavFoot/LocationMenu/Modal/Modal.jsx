import React from "react";
import ReactDom from "react-dom";
import { CgClose } from "react-icons/cg";
import { ButtonStyled } from "../Button/ButtonStyled";
import { lightblue } from "../../../../../utilsStyles/utilsColors";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "35vh",
  width: "50%",
  padding: "3rem",
  zIndex: 1000,
  borderRadius: "0.4rem",
  backgroundColor: "#FFF",
  fontFamily: "Helvetica",
  fontSize: "1.7rem",
  filter: "blur(0.1rem)",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .5)",
  zIndex: 1000,
};

function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h3 style={{ marginBottom: "0.7rem" }}>
              Elegí donde recibir tus compras
            </h3>
            <p>Podrás ver costos y tiempo de entrega en todo lo que busques.</p>
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
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
