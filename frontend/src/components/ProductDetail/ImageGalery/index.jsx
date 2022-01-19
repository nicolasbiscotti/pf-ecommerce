import { useState } from "react";
import { StyledImageGalery } from "./styled";

export default function ImageGalery({ images }) {
  const [imageShown, setImageShown] = useState("");

  const onSetImageShownHandler = (e) => {
    setImageShown(e.target.src);
  };

  return (
    <StyledImageGalery>
      <div className="producMainImage">
        <img
          src={imageShown ? imageShown : images[0]}
          alt="product main"
          className="mainImage"
        />
      </div>
      <div className="thumbsList">
        {images?.map((imageUrl, index) => (
          <img
            onClick={onSetImageShownHandler}
            className="thumbs"
            key={index}
            src={imageUrl}
            alt="product alternative"
          />
        ))}
      </div>
    </StyledImageGalery>
  );
}
