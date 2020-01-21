import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Login from "./components/Login";
import About from "./components/About";
import HealthProblemSelector from "./components/HealthProblemSelector";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <div style={{ background: "", height: "100vh" }}>
        <Navbar
          color="black"
          light
          expand="md"
          style={{
            background: "rgba(201, 231, 242, 1)",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <NavbarBrand href="/select">
            <h2>HealthDetect</h2>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Get Started</NavLink>
              </NavItem>
            </Nav>
            <Nav className="justify-content-end" navbar>
              <NavItem>
                <NavLink href="#">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
