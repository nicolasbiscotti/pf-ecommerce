import React from "react";
import { FooterStyled } from "./styles";
import { CardFooter } from "./CardFooter/CardFooter";
import { FaTruck } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { IoHelpBuoy } from "react-icons/io5";
import { FaRegIdCard } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <FooterStyled>
        <CardFooter
          icon={<FaTruck className="icon" />}
          title="FREE DELIVERY"
          description="For all orders over $120"
        />
        <CardFooter
          icon={<BsCreditCardFill className="icon" />}
          title="SAFE PAYMENT"
          description="If goods have problems"
        />
        <CardFooter
          icon={<IoHelpBuoy className="icon" />}
          title="24/7 HELP CENTER"
          description="24/7 Customer Support"
        />
        <CardFooter
          icon={<FaRegIdCard className="icon" />}
          title="FRIENDLY SERVICES"
          description="30 day satisfaction"
        />
      </FooterStyled>
    </>
  );
};
