import { Button } from "../../../common/button/Button";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledSlide = styled.div`

  position: relative;
  &.mySlides {
    display:none;
  }
  &.mySlides.visible {
    display:block;
  }
  .link {
    color: white;
  }
  .slideContent {
    position: absolute;
    top: 10%;
    bottom: 10%;
    left:10%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    color: white;
    font-size: 3rem;
    &.small{
      @media (max-width: 992px) {
        display: none;
      }
    }

    &.big {
      font-size: 4rem;
      @media (max-width: 552px) {
        font-size: 2.5rem;        
      }
    }
  }
`


export default function Slide({
  className, dataimg, datah1, datatext, dataid
}) {
  return (
    <StyledSlide className={className}>
      <img src={dataimg} alt={datah1} />
      <div className='slideContent'>
        <p className="big">{datatext}</p>
        <p className="small">{datah1}</p>
        <Button
          bgColor="transparent"
          border="3px solid white"
          color="white"
          hoverBgColor="#16bcdc"
          hoverBorder="3px solid #16bcdc"
          height="40px"
          width="160px"
          radius="30px"
        ><Link to={`/detail/${dataid}`} className="link">
            DISCOVER NOW
          </Link></Button>

      </div>
    </StyledSlide>
  )
}
