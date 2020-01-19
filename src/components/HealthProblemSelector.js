import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
function convertDataURIToBinary(dataURI) {
  var BASE64_MARKER = ";base64,";
  var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for (var i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}
class HealthProblemSelector extends Component {
  state = {
    modal: false,
    problemlist: [
      { name: "Lung Effusion/Infiltration", required: "Lung Scan (X-Ray)" },
      { name: "Brain Tumor", required: "Brain Scan (X-Ray or CT)" },
      { name: "Finger Fracture", required: "Hand X-Ray" },
      { name: "Atelectasis", required: "Lung Scan (X-Ray)" }
    ]
  };
  render() {
    var rendercards = this.state.problemlist.map(function(problem) {
      return (
        <div className="col-sm-5" key={problem.name} style={{ margin: "5px" }}>
          <Card style={{ background: "#cae7f3" }}>
            <CardBody>
              <CardTitle style={{ background: "#f3d6ca", padding: "10px" }}>
                <h3> {problem.name}</h3>
              </CardTitle>
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
    const toggle = () => this.setState({ modal: !this.state.modal });
    const onSubmit = ev => {
      ev.preventDefault();
      var radioinputs = document.getElementsByClassName("radioinput");
      var validatedFile = document.getElementById("validatedFile").files[0];

      for (var i = 0; i < radioinputs.length; i++) {
        if (radioinputs[i].type === "radio" && radioinputs[i].checked) {
          console.log(radioinputs[i].value);
        }
      }
      console.log(validatedFile);
      var f = validatedFile;
      var r = new FileReader();

      r.onload = function(e) {
        var conv;
        var bas64;
        var base64Img = e.target.result;
        bas64 = base64Img;

        console.log(bas64.slice(22));
        fetch("https://hackdavis-2020-265606.appspot.com/image", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            binImg: bas64
          })
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(ev => console.log(ev));
      };
      r.readAsDataURL(f);
      console.log("here");

      toggle();
    };
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "30px"
        }}
      >
        <form onSubmit={onSubmit}>
          <div className="row">{rendercards}</div>
          <div className="custom-file" style={{ marginTop: "20px" }}>
            <input
              type="file"
              className="custom-file-input"
              id="validatedFile"
              accept="image/*"
              name="photo"
            />
            <label className="custom-file-label">Choose image file...</label>
            <div className="invalid-feedback">Please input an image!</div>
            <div style={{ marginTop: "20px" }}>
              <Button outline color="primary" type="submit" className="btn">
                Submit
              </Button>
            </div>
          </div>
        </form>
        <Modal isOpen={this.state.modal} toggle={toggle} backdrop="static">
          <ModalHeader toggle={toggle}>Result</ModalHeader>
          <ModalBody>Result json is displayed here</ModalBody>
          <ModalFooter>
            <Button outline color="primary" onClick={toggle}>
              Done
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default HealthProblemSelector;
