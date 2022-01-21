import { useState } from 'react';
import Slide from './Slide';
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
              <Slide 
                key={slide.id} 
                className={`fade mySlides${id === visibleSlide ? " visible" : ""}`}
                dataimg={slide.imgsrc}
                datadetail={slide.id}
                datah1={slide.name}
                datatext={slide.tca}
              />
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
