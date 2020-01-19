import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import Login from "./components/Login";
import HealthProblemSelector from "./components/HealthProblemSelector";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <div style={{ background: "#e9f5fa" }}>
        <Navbar
          color="black"
          light
          expand="md"
          style={{ background: "rgba(255, 255, 255, 0.4)" }}
        >
          <NavbarBrand href="/">HealthDetect</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {/* <NavItem>
                <NavLink href="/login">login</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>

        <Switch>
          <Route path="/select">
            <HealthProblemSelector />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
