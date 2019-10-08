import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactComponent as Logo } from "../../resources/logo.svg";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="dark"
      variant="dark"
      className="overflow-hidden"
    >
      <Navbar.Brand>
        <Logo />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;
