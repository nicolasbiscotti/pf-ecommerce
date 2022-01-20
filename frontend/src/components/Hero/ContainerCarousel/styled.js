import styled from 'styled-components';
export const StyledContainerCarousel = styled.div`
  flex: 1 60%;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .slideshow-container {
    position: relative;
    margin: auto;
  }
  
  .mySlides {
    display:none;
  }
  .mySlides.visible {
    display:block;
  }

  .dots {
    position: absolute;
    bottom: 10px;
  }
  .dot {
    cursor: pointer;
    height: 13px;
    width: 13px;
    margin: 0 5px;
    border: 2px solid #F7F7F7;
    background-color: transparent;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .active, .dot:hover {
    background-color: #F7F7F7;
  }
`;