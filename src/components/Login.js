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
            className="container"
            style={{
              background: "#cae7f3",
              paddingTop: "50px",
              paddingBottom: "50px",
              borderRadius: "20px"
            }}
          >
            <Form>
              <h3>Please Log In or Sign Up</h3>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
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
