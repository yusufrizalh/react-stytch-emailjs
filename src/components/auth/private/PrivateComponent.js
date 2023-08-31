import { useStytchSession } from "@stytch/stytch-react";
import { Navigate } from "react-router-dom";

const PrivateComponent = ({ children }) => {
  const session = useStytchSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};

export default PrivateComponent;
