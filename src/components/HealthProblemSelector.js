import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
class HealthProblemSelector extends Component {
  state = { problemlist: [
    { name: "Lung Effusion/Infiltration", required: "Lung Scan (X-Ray)" }, 
    {name: "Brain Tumor", required: "Brain Scan (X-Ray or CT)"}, 
    {name: "Finger Fracture", required: "Hand X-Ray"}, 
    {name: "Atelectasis", required: "Lung Scan (X-Ray)"}] };
  render() {
    var rendercards = this.state.problemlist.map(function (problem) {
      return (
        <div key={problem.name} style={{ margin: "5px" }}>
          <Card>
            <CardBody>
              <CardTitle>{problem.name}</CardTitle>
              <CardSubtitle>What You'll Require</CardSubtitle>
              <CardText>
                Blah blah blah scan
                <br />
                Test->
                <input
                  type="radio"
                  value={problem}
                  name="exampleRadios"
                  className="form-check-input radioinput"
                  style={{ marginLeft: "15px" }}
                ></input>
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    });
    const onSubmit = ev => {
      ev.preventDefault();
      var radioinputs = document.getElementsByClassName("radioinput");
      var validatedFile = document.getElementById("validatedFile");

      for (var i = 0; i < radioinputs.length; i++) {
        if (radioinputs[i].type === "radio" && radioinputs[i].checked) {
          console.log(radioinputs[i].value);
        }
      }
      console.log(validatedFile);
      console.log("submitted");
    };
    return (
      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <form onSubmit={onSubmit}>
            <div className="row">{rendercards}</div>
            <div className="custom-file" style={{ marginTop: "20px" }}>
              <input
                type="file"
                className="custom-file-input"
                id="validatedFile"
                accept="image/*"
                required
              />
              <label className="custom-file-label">Choose image file...</label>
              <div className="invalid-feedback">Please input an image!</div>
              <div style={{ marginTop: "20px" }}>
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default HealthProblemSelector;
