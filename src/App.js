import React, { Component } from "react";
import { Helmet } from "react-helmet";
import isValidDate from './js/functions.js';

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";

import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      dateinput: "",
      error: false,
      errortxt: " ",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  } 

  handleInputChange(event) {

    isValidDate(event.target.value) ? this.setState({error: false}) : this.setState({error: true});
    isValidDate(event.target.value) ? this.setState({errortxt: "Correct"}) : this.setState({errortxt: "Please check date is correct"});

    var key = event.target.name;
    var value = event.target.value;
    var obj = {};
    obj[key] = value;
    this.setState(obj);
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Date Format Test</title>
        </Helmet>
        <Container className="p-3 text-left">
          <Jumbotron >
            <div>
              <h1 className="font-weight-light text-primary">
                Digitickets Text Input
              </h1>
              <h2 className="font-weight-light text-primary">
                Please enter a valid <i>historical</i> date using the format DD/MM/YYYY
              </h2>
            </div>
            <div>
              <Form>
                <Form.Group 
                  controlId="formBasicTextInput"
                  >
                  <Form.Label
                    >Date
                  </Form.Label>
                  <Form.Control 
                    type="text"
                    aria-label="date-input"
                    placeholder="DD/MM/YYYY" 
                    size="lg"
                    className={
                    this.state.error
                      ? "form-control is-invalid"
                      : "form-control is-valid"
                    }
                    name="dateinput"
                    value={this.state.dateinput}
                    onChange={this.handleInputChange}
                  />
                  <Form.Text 
                  className={
                    this.state.error
                      ? "text-danger "
                      : "text-success "
                    }
                  >
                    {this.state.errortxt}
                  </Form.Text>
                </Form.Group>
              </Form>
            </div>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default App;
