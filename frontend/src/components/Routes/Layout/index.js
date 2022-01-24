import { StyledLayout } from "./styled";
import Header from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <StyledLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledLayout>
  );
}
