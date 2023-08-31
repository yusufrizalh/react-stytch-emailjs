import { useCallback } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NewBlog from "./components/NewBlog";
import ProductList from "./components/products/ProductList";
import ProductEdit from "./components/products/ProductEdit";

import { Routes, Route } from "react-router-dom";

import { useStytch } from "@stytch/stytch-react";

import Login from "./components/auth/Login";
import Account from "./components/auth/Account";
import Gallery from "./components/auth/Gallery";
import Authenticate from "./components/auth/Authenticate";
import PrivateComponent from "./components/auth/private/PrivateComponent";

function App() {
  const client = useStytch();

  const handleLogin = async (email) => {
    const result = await client.magicLinks.email.loginOrCreate(email);
    console.log(result.status_code);
    alert(`Link login was sent to ${email}`);
  };

  const handleLogout = useCallback(async () => {
    await client.session.revoke();
    alert("User was logged out!");
  }, [client]); // merender ketika client terdeteksi

  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} />

      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/editproduct/:id" element={<ProductEdit />} />
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/account"
            element={
              <PrivateComponent>
                <Account />
              </PrivateComponent>
            }
          />
          <Route
            path="/gallery"
            element={
              <PrivateComponent>
                <Gallery />
              </PrivateComponent>
            }
          />
          <Route path="/authenticate" element={<Authenticate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
