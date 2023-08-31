import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStytch, useStytchSession } from "@stytch/stytch-react";

const Authenticate = () => {
  const navigate = useNavigate();
  const client = useStytch();
  const session = useStytchSession();

  useEffect(() => {
    if (session) {
      navigate("/account");
    } else {
      const token = new URLSearchParams(window.location.search).get("token");
      client.magicLinks
        .authenticate(token, { session_duration_minutes: 60 })
        .then(() => {
          alert("Success to authenticate!");
          //navigate(0); // reload
        });
    }
  }, [client, session]); // dirender saat muncul client dan session

  return (
    <div className="container">
      <h3>
        <b>Loading.....</b>
      </h3>
    </div>
  );
};

export default Authenticate;
