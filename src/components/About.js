import React from "react";
import { Badge, UncontrolledCarousel } from "reactstrap";
const items = [
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "1"
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2"
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3"
  }
];

const About = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ maxWidth: "800px", textAlign: "left", margin: "25px" }}>
      <h1>About HealthDetect®</h1>
      <hr></hr>
      <p>
        We know that there are a lot of models out there that could do some
        specific detection but there is no centralized app that could provide
        users with options to checkup for their desired disease. We introduce
        HealthDe.tech to solve this problem. We curated the most common diseases
        that could be detected accurately by ML. We then used the state of art
        TensorFlow models to deploy these models and backed our results with
        google-cloud and google-vision api.
      </p>
      <div style={{ textAlign: "center" }}>
        <img src="https://assets.aboutkidshealth.ca/akhassets/BT_Neuro_MRI2_MEDIMG-PHO_EN.jpg?RenditionID=10" />
      </div>
      <p>
        We know that doctor/medical resources are limited and are expensive. So
        by using our app people can do a basic analysis with satisfactory
        precision and decrease the doctor visits thereby increasing the
        efficiency of doctors and saving a lot of money!
        <br /> All you need for our app to for a detection is an x-ray or blood
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
      <UncontrolledCarousel items={items} autoPlay={false} />
    </div>
  </div>
);

export default About;
