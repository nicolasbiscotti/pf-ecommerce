import styled from "styled-components";

export const CardOrderStyled = styled.div`
  padding: 15px;
  margin-bottom: 10px; 
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);;
  background-color: white;
  overflow: hidden;
  .cardOrderTop {
    display: flex;
  }
  .cardOrderBottom {
    display: "flex";
    
  }
  hr {
    color: #0000002e;
  }
  .product {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 10px;
    margin: 10px 0 ;
    .imgContainer {
      width: 160px;
      height: 160px;
      display: flex; 
      justify-content: center;
      
      img {
        height: 100%;
        width: initial;   
      }
    }
  }
`; 