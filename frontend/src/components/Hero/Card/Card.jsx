import { StyledCard } from "./styled";
export default function Card(props) {
  return (
    <StyledCard {...props} className="fade">
      <img src={props.imgsrc} alt="" />
    </StyledCard>
  )
}
