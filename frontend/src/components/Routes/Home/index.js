import { StyledHome } from "./styled";
import Header from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <StyledHome>
      <Header />
      <Outlet />
      <Footer />
    </StyledHome>
  );
}
