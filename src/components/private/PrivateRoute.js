import { Navigate } from "react-router-dom";
import { useStytchSession } from "@stytch/stytch-react";

const PrivateRoute = ({ children }) => {
  const session = useStytchSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};

export default PrivateRoute;
