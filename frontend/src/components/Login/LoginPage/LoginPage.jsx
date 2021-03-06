import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Footer } from "../../Footer/Footer";
import { StyledLoginPage } from "./styled";

export default function LoginPage() {
  const message = useSelector((state) => state.login.message);
  return (
    <StyledLoginPage>
      <header></header>
      <main>
        {message ? <span className={`message ${message.type}`}>{message.text}</span> : ""}
        {/* LoginRegister or RegisterForm */}
        <Outlet />
      </main>
      <Footer />
    </StyledLoginPage>
  );
}
