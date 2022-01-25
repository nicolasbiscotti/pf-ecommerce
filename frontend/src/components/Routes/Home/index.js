import { StyledHome } from "./styled";
import Hero from "../../Hero"
import Categories from "./Categories"

export default function Home() {
  return (
    <StyledHome>
      <Hero />
      <Categories />
    </StyledHome>
  );
}
