import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress,
  Tooltip
} from "reactstrap";

const addresses = {
  "Brain Tumor": "http://127.0.0.1:5000/predict",
  Atelectasis: "https://hackdavis-2020-265606.appspot.com/image",
  "Finger Fracture": "https://hackdavis-2020-265606.appspot.com/image",
  "Lung Effusion/Infiltration":
    "https://hackdavis-2020-265606.appspot.com/image",
  Pneumonia: "http://127.0.0.1:5000/predict"
};

class HealthProblemSelector extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      problemlist: [
        {
          name: "Lung Effusion/Infiltration",
          required: "Lung Scan (X-Ray)",
          code: "le",
          related: "Pneumonia",
          link: "https://my.clevelandclinic.org/health/diseases/17373-pleural-effusion-causes-signs--treatment/management-and-treatment"
        },
        {
          name: "Brain Tumor",
          required: "Brain Scan (X-Ray or CT)",
          code: "bt",
          link: "https://www.ucsfhealth.org/conditions/brain-tumor/treatment"
        },
        { name: "Finger Fracture", required: "Hand (X-Ray)", code: "ff" , link:"https://www.medicalnewstoday.com/articles/173312.php#Diagnosis%20and%20treatment"},
        { name: "Atelectasis", required: "Lung Scan (X-Ray)", code: "at", link:"https://www.mayoclinic.org/diseases-conditions/atelectasis/symptoms-causes/syc-20369684" },
        {
          name: "Pneumonia",
          required: "Chest Scan (X-Ray)",
          code: "pn",
          related: "Lung Effusion/Infiltration",
          link: "https://www.mayoclinic.org/diseases-conditions/pneumonia/diagnosis-treatment/drc-20354210"
        },
        { name: "Cervical Cancer", required: "Pap Smear", code: "ps", link: "https://www.mayoclinic.org/diseases-conditions/cervical-cancer/diagnosis-treatment/drc-20352506" }
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
    const setDisease = e => this.setState({ message: e });
    const setSuggession = e => this.setState({ suggession: e });
    const toggle = () => this.setState({ modal: !this.state.modal });
    const setLoading = e => this.setState({ loading: e });
    const setProb = e => this.setState({ prob: e });
    const onSubmit = ev => {
      ev.preventDefault();
      var validatedFile = document.getElementById("validatedFile").files[0];

      var f = validatedFile;
      if (!f) return alert("Please add an image");
      setLoading(true);
      var r = new FileReader();

      r.onload = function(e) {
        var bas64;
        var base64Img = e.target.result;
        bas64 = base64Img;
        console.log(addresses[that.selected.name]);

        console.log(bas64.slice(22));
        fetch(addresses[that.selected.name], {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            binImg: bas64,
            type: that.selected.code
          })
        })
          .then(response => response.json())
          .then(data => {
            toggle();
            setLoading(false);
            console.log(data);
            setProb(Object.values(data)[0] * 100);
            let s = `${
              data["No Finding"]
                ? "We couldn't find any medical problems in this image. "
                : `You might have ${that.selected.name}. <a href=${that.selected.link}>Find symptoms, treatments, and more by clicking here. </a>`
            }`;
            if (that.selected.related)
              setSuggession(
                `You may also want to consider screening for:\n ${that.selected.related}.`
              );
            setDisease(s);
          })
          .catch(ev => {
            setLoading(false);
            alert(
              "There was an error with your image. Please try again later."
            );
            console.log(ev);
          });
      };

      r.readAsDataURL(f);
    };
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "30px",
          marginBottom: "50px"
        }}
      >
        <h1
          style={{ margin: "20px", marginBottom: "40px", textAlign: "center" }}
        >
          What ailments would you like to check today?
        </h1>
        <form
          onSubmit={onSubmit}
          style={{
            width: "70%"
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            {rendercards}
          </div>
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
                    {this.state.loading ? "Loading..." : "Submit"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </form>
        <Modal isOpen={this.state.modal} toggle={toggle} backdrop="static">
          <ModalHeader toggle={toggle}>Result</ModalHeader>
          <ModalBody>
            {this.state.message}
            <Progress color="info" value={this.state.prob} style={{marginTop: '18px'}} id="progress">
            {Number.parseFloat(this.state.prob).toFixed(1)}% confidence
            </Progress>
            <p>{this.state.suggession}</p>
          </ModalBody>
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
