import { StyledCard } from "./styled";
export default function Card(props) {
  return (
    <StyledCard {...props} className="fade">
      <img src={props.imgsrc} alt={props.name} />
      <div className="slideContent">
        <p className="big">{props.name}</p>
        <p className="small">{props.category}</p>
      </div>
    </StyledCard>
  )
}
