import React from "react";
import { Icon } from "./iconSocial/Icon";
import { ContainerIconStyled } from "./styles";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

export const ContainerIcons = () => {
  return (
    <ContainerIconStyled>
      <Icon bgColor="#3B5998" icon={<FaFacebookF />}></Icon>
      <Icon bgColor="#55ACEE" icon={<FaTwitter />}></Icon>
      <Icon bgColor="#FF6600" icon={<FaRss />}></Icon>
      <Icon bgColor="#BB0000" icon={<FaYoutube />}></Icon>
      <Icon bgColor="#AAD450" icon={<FaVimeoV />}></Icon>
      <Icon bgColor="#125688" icon={<TiSocialInstagram />}></Icon>
    </ContainerIconStyled>
  );
};
