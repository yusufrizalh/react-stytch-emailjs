import { useEffect } from "react";
import { useStytch, useStytchSession } from "@stytch/stytch-react";
import { useNavigate } from "react-router-dom";

const Authenticate = () => {
  const client = useStytch();
  const session = useStytchSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate("/account");
    } else {
      const token = new URLSearchParams(window.location.search).get("token");
      client.magicLinks
        .authenticate(token, { session_duration_minutes: 60 })
        .then(() => {
          alert("Successfully Authenticate!");
          navigate(0);
        });
    }
  }, [client, session]);

  return (
    <div className="container">
      <h3>
        <strong>Loading.....</strong>
      </h3>
      <p>Please wait while we authenticate your token.</p>
    </div>
  );
};

export default Authenticate;
