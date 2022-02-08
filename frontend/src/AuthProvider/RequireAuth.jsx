import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
export default function RequireAuth({ children, isAdmin, redict }) {
  redict = redict || null;

  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userType = useSelector((state) => state.login.userType);

  if ((!isLoggedIn || (isAdmin && userType !== "admin")) && redict) {
    // Redirect them to the {redirect} page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={redict} state={{ from: location }} replace />;
  } else if (!isLoggedIn || (isAdmin && userType !== "admin")) {
    return null;
  }
  return children;
}
