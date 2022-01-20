import React, { useState } from "react";
import { ItemCollapse } from "./ItemCollapse/ItemCollapse";
import { NewsletterContainer } from "./NewsletterContainer/NewsletterContainer";
import { ContainerCollapseStyled } from "./styles";

export const ContainerCollapse = () => {
  const [active, setActive] = useState("");

  return (
    <ContainerCollapseStyled>
      <div className="items">
        <ItemCollapse
          text="INFORMATION"
          list={[
            "About us",
            "Our stores",
            "Price drop",
            "New products",
            "Best sellers",
            "Contact us",
            "Sitemap",
          ]}
          active={active}
          setActive={setActive}
        />
        <ItemCollapse
          text="WHY CHOOSE"
          list={[
            "Theme Features",
            "Typography",
            "Banner Effect",
            "Buy This Theme",
            "Documentation",
            "Support",
            "Rating",
          ]}
          active={active}
          setActive={setActive}
        />
        <ItemCollapse
          text="SAMPLE MENU"
          list={[
            "Edwin Ortiz",
            "Leila ",
            "Luiggy ",
            "Nicolas",
            "Adrian",
            "Fernando",
            "Franco",
          ]}
          active={active}
          setActive={setActive}
        />
      </div>

      <NewsletterContainer />
    </ContainerCollapseStyled>
  );
};
