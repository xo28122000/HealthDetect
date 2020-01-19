import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
class Login extends Component {
  state = {};
  render() {
    const oncSubmit = () => {
      //  do verification here
      window.location.href = "/select";
    };
    return (
      <div className="container" style={{ minHeight: "90vh", height: "90vh" }}>
        <div
          id="centerdivElement"
          style={{
            position: "absolute",
            top: "30%",
            left: "20%",
            right: "20%",

            // marginLeft: "-50px",
            width: "60%",
            height: "100px"
          }}
        >
          <div
            className="container shadow"
            style={{
              background: "#cae7f3",
              borderRadius: "8px",
              paddingBottom: "25px"
            }}
          >
            <Form>
              <h3 style={{ paddingTop: "25px", paddingBottom: "25px" }}>
                Log In
              </h3>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Enter your email..."
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Enter your password..."
                  required
                />
              </FormGroup>

              <Button outline color="primary" onClick={oncSubmit}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
