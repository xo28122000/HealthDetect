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
            top: "50%",
            left: "40%",

            marginLeft: "-50px",
            width: "30%",
            height: "100px"
          }}
        >
          <Form>
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

            <Button onClick={oncSubmit}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
