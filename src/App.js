import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NewBlog from "./components/NewBlog";
import ProductList from "./components/products/ProductList";

import { Routes, Route, useNavigate } from "react-router-dom";

import { useStytch } from "@stytch/stytch-react";

import Account from "./components/authentication/Account";
import Login from "./components/authentication/Login";
import Authenticate from "./components/authentication/Authenticate";

import PrivateRoute from "./components/private/PrivateRoute";
import { useCallback } from "react";

function App() {
  const client = useStytch();
  const navigate = useNavigate();

  const handleLogin = async (email) => {
    const res = await client.magicLinks.email.loginOrCreate(email);
    console.log(res.status_code);
    alert(`Link was sent to ${email}`);
  };

  const handleLogout = useCallback(async () => {
    await client.session.revoke();
    alert("User was logged out!");
    navigate(0); // refresh
  }, [client]);

  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} />

      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/account"
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
          <Route path="/authenticate" element={<Authenticate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
