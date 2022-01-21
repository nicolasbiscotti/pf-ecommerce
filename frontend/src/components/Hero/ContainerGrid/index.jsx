import Card from "../Card";
import { StyledContainerGrid } from "./styled";

export default function ContainerGrid({ data }) {
  return (
    <StyledContainerGrid>
      {
        data.map(({ imgsrc, id, name, category }) =>
          <Card 
            key={id} 
            imgsrc={imgsrc} 
            name={name}
            category={category}
          />)
      }
    </StyledContainerGrid>
  )
}
