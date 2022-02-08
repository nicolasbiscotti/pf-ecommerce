import { useSelector } from "react-redux";
export default function RequireAuth({ children, isAdmin }) {
  // let auth = useAuth();
  // let location = useLocation();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userType = useSelector((state) => state.login.userType);

  if (!isLoggedIn || (isAdmin && userType !== "admin")) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return null;
  }

  return children;
}
