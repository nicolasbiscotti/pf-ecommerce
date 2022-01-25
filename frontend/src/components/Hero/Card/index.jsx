import { StyledCard } from "./styled";
import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    <StyledCard {...props} className="fade">
      <Link to="/shop">
        <img src={props.imgsrc} alt={props.name} />
        <div className="slideContent">
          <p className="big">{props.name}</p>
          <p className="small">{props.category}</p>
        </div>
      </Link>
    </StyledCard>
  )
}
