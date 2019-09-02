import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../App.css";

const Header = () => {
  return (
    <div className="bungkus">
      <div className="navbar"></div>
      <Navbar>
        <Navbar.Brand className="name-web">HudzevResto</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="link1" to="/">
            Home
          </Link>
          <Link className="link1" to="/makanan">
            Food
          </Link>
          <Link className="link1" to="/minuman">
            Drinks
          </Link>
          <Link className="link1" to="/contact">
            Contact
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
