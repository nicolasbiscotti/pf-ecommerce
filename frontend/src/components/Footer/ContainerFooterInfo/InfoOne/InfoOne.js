import React from "react";
import { InfoOneStyled } from "./styles";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ContainerIcons } from "./ContainerIcons/ContainerIcons";

export const InfoOne = () => {
  return (
    <InfoOneStyled>
      <h3>e-kommerce</h3>
      <p>
        Aenean dignissim ante eu purus dictum, feugiat element erat luctus.
        Integer scelerisque, diam nec c ondimentum facilisis.
      </p>
      <ul>
        <li>
          <BsFillTelephoneFill className="contactIcon" /> Tel: +123 456 789
        </li>
        <li>
          <MdEmail className="contactIcon" /> Email: example@demo.com
        </li>
        <li>
          <FaMapMarkerAlt className="contactIcon" /> Address: 6 Bis Rue
          Meyerbeer
        </li>
      </ul>
      <h4>FOLLOW US</h4>
      <ContainerIcons />
    </InfoOneStyled>
  );
};
