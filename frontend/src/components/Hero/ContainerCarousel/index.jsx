import { useState } from 'react';
import { StyledContainerCarousel } from './styled';

export default function ContainerCarousel({ data }) {
  const [visibleSlide, setVisibleSlide] = useState(0)

  const handleSlide = (idSlide) => {
    setVisibleSlide(idSlide)
  }
  return (
    <StyledContainerCarousel>
      <div className="slideshow-container">

        {
          data.map((slide, id) => {
            return (
              <div className={`fade mySlides${id === visibleSlide ? " visible" : ""}`} key={id}>
                <img src={slide.imgsrc} alt="carousel 1" />
              </div>
            )
          })
        }

      </div>

      <div className="dots" >
        {
          data.map((_, id) => (
            <span
              key={id}
              onClick={() => handleSlide(id)}
              className={`${id === visibleSlide ? "dot active" : "dot"}`}
            ></span>
          ))
        }
      </div>
    </StyledContainerCarousel>
  )
}
