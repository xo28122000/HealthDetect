import React from "react";
import {
  Badge,
  UncontrolledCarousel,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
const items = [
  {
    src: "./accuracy1.png",

    key: "1"
  },
  {
    src: "./accuracy2.png",

    key: "2"
  }
];

const About = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ maxWidth: "800px", textAlign: "left", margin: "25px" }}>
      <h1>About HealthDetect®</h1>
      <hr></hr>
      <p>
        Healthcare check-ups are expensive, invasive, and time-consuming. What
        if there was a way to automate these procedures? A computer could take
        the role of a doctor in determining whether or not you have certain
        diseases. We know that there are a lot of models already exist for
        detection some specific diseases. But how could to average person know
        how to deploy (much less train) a neural net according to a research
        paper? We introduce HealthDe.tech to solve this problem, an centralized
        app which gives users a multitude of options for diseases they want to
        check-up on. We curated some of the most common diseases that could be
        detected accurately using machine learning and computer vision. We then
        trained state-of-art TensorFlow models according to medical research
        papers. Finally, we deployed these models on Google's Cloud Platform and
        verified them against a model trained on Google's AutoML Vision API to
        deliver fast, accurate results to anyone who decides to use our service.
      </p>
      <div style={{ textAlign: "center" }}>
        <img src="https://assets.aboutkidshealth.ca/akhassets/BT_Neuro_MRI2_MEDIMG-PHO_EN.jpg?RenditionID=10" />
      </div>
      <p>
        We know that doctor/medical resources are limited and are expensive. So
        by using our app people can do a basic analysis with satisfactory
        precision and decrease the doctor visits thereby increasing the
        efficiency of doctors and saving a lot of money!
        <br /> All you need for our app to run a detection is an x-ray or blood
        sample diagram or in many cases just a photo!
      </p>
      <p>
        Our stack:{" "}
        <Badge
          style={{ marginLeft: "5px", marginRight: "5px" }}
          pill
          color="danger"
        >
          Tensorflow
        </Badge>
        <Badge
          style={{ marginLeft: "5px", marginRight: "5px" }}
          pill
          color="danger"
        >
          Google-vision
        </Badge>
        <Badge
          style={{ marginLeft: "5px", marginRight: "5px" }}
          pill
          color="primary"
        >
          Python
        </Badge>
        <Badge
          style={{ marginLeft: "5px", marginRight: "5px" }}
          pill
          color="primary"
        >
          React.js
        </Badge>
        <Badge
          style={{ marginLeft: "5px", marginRight: "5px" }}
          pill
          color="primary"
        >
          Flask
        </Badge>
        <Badge
          style={{ marginLeft: "5px", marginRight: "5px" }}
          pill
          color="primary"
        >
          Express
        </Badge>
      </p>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <Card style={{ background: "#444444" }}>
              {/* <CardImg top width="100%" src="./gcp.png" alt="gcp image" /> */}
              <CardBody style={{ color: "white" }}>
                <UncontrolledCarousel items={items} autoPlay={false} />
                <CardTitle style={{ marginTop: "10px" }}>
                  <h2>Our Tensorflow models</h2>
                </CardTitle>

                <CardText>It is trained to predict pneumonia</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-sm-6">
            <Card style={{ background: "#444444", padding: "10px" }}>
              <CardImg top width="100%" src="./gcp.png" alt="gcp image" />
              <CardBody style={{ color: "white" }}>
                <CardTitle>
                  <h2>Our GCP Model</h2>
                </CardTitle>

                <CardText>It is trained to predict Lung Effusion</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
