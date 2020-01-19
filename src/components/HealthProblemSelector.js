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

class HealthProblemSelector extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      problemlist: [
        { name: "Lung Effusion/Infiltration", required: "Lung Scan (X-Ray)" },
        { name: "Brain Tumor", required: "Brain Scan (X-Ray or CT)" },
        { name: "Finger Fracture", required: "Hand (X-Ray)" },
        { name: "Atelectasis", required: "Lung Scan (X-Ray)" }
      ]
    };
  }

  render() {
    const setSelected = e => {
      this.setState({ selected: e });
    };
    const that = this.state;
    var rendercards = this.state.problemlist.map(function(problem) {
      return (
        <div
          key={problem.name}
          style={{ flex: "0 50%" }}
          onClick={() => setSelected(problem)}
        >
          <Card
            className={` ${
              that.selected.name === problem.name ? "selected" : "blue-on-hover"
            }`}
            style={{ margin: "5px", cursor: "pointer", borderRadius: "8px" }}
          >
            <CardBody>
              <CardTitle>
                <h3> {problem.name}</h3>
              </CardTitle>
              <CardText>
                  <em>Requires: {problem.required}</em>
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    });
    const setDisease = (e) => this.setState({message: e})
    const toggle = () => this.setState({ modal: !this.state.modal });
    const setLoading = (e) => this.setState({ loading: e});
    const onSubmit = ev => {
      ev.preventDefault();
      var validatedFile = document.getElementById("validatedFile").files[0];

      
      var f = validatedFile;
      if(!f) return alert('Please add an image')
      setLoading(true)
      var r = new FileReader();

      r.onload = function(e) {
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
          .then(data => {
            toggle();
            setLoading(false)
            console.log(data)
            setDisease(`${data['No Finding']? "We couldn't find any medical problems in this image": `You might have ${Object.keys(data)[0]} (${Object.values(data)[1]}% probability)`}`)
          })
          .catch(ev => {setLoading(false); alert('There was an error with your image. Please try again later.'); console.log(ev)});
      };
      
      r.readAsDataURL(f);
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
        <h1 style={{ margin: "20px" }}>
          What ailments would you like to check today?
        </h1>
        <form onSubmit={onSubmit}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>{rendercards}</div>
          <div className="custom-file" style={{ marginTop: "20px" }}>
            <input
              type="file"
              className="custom-file-input"
              id="validatedFile"
              accept="image/*"
              name="photo"
            />
            {this.state.selected && (
              <div>
                <label
                  className="custom-file-label"
                  style={{ cursor: "pointer" }}
                >
                  <em>Upload images here...</em>
                </label>
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <Button
                    outline
                    color="primary"
                    type="submit"
                    className="btn"
                    style={{ paddingLeft: "100px", paddingRight: "100px" }}
                  >
                    {this.state.loading? 'Loading...' : 'Submit'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </form>
        <Modal isOpen={this.state.modal} toggle={toggle} backdrop="static">
          <ModalHeader toggle={toggle}>Result</ModalHeader>
          <ModalBody>{this.state.message}</ModalBody>
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
