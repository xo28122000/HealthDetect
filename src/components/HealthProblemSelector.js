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
  constructor() {
    super()
    this.state = {
      selected: false,
      problemlist: [
        { name: "Lung Effusion/Infiltration", required: "Lung Scan (X-Ray)" },
        { name: "Brain Tumor", required: "Brain Scan (X-Ray or CT)" },
        { name: "Finger Fracture", required: "Hand (X-Ray)" },
        { name: "Atelectasis", required: "Lung Scan (X-Ray)" }
      ]
    }
  }


  render() {
    const setSelected = (e) => {
      this.setState({ selected: e })
    }
    const that = this.state
    var rendercards = this.state.problemlist.map(function (problem) {
      return (
        <div key={problem.name} style={{flex: '0 50%'}} onClick={() => setSelected(problem)}>
          <Card className={` ${that.selected.name === problem.name? 'selected' : 'blue-on-hover'}`} style={{ margin: '5px', cursor: 'pointer', borderRadius: '8px' }}>
            <CardBody>
              <CardTitle>
                <h3> {problem.name}</h3>
              </CardTitle>
              <CardText>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <em>Requires: {problem.required}</em>
                </div>
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    });
    const onSubmit = ev => {
      ev.preventDefault();
      
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
        <h1 style={{margin: '20px'}}>What ailments would you like to check today?</h1>
        <form onSubmit={onSubmit}>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>{rendercards}</div>
          <div className="custom-file" style={{ marginTop: "20px" }}>
            <input
              type="file"
              className="custom-file-input"
              id="validatedFile"
              accept="image/*"
              required
            />
            {this.state.selected &&
              <div>
                <label className="custom-file-label" style={{cursor: 'pointer'}}><em>Please upload an image...</em></label>
                <div style={{ marginTop: "20px", display: 'flex', justifyContent: 'center' }}>
                  <Button outline color="primary" type="submit" className="btn" style={{paddingLeft: '100px', paddingRight: '100px'}}>
                    Submit
                  </Button>
                </div>
              </div>
            }
          </div>
        </form>
      </div>
    );
  }
}

export default HealthProblemSelector;
