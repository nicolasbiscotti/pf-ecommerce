import { Outlet } from "react-router-dom";
import { Footer } from "../../Footer/Footer";
import { StyledLoginPage } from "./styled";

export default function LoginPage() {
  return (
    <StyledLoginPage>
      <header>
        
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledLoginPage>
  );
}
