import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";

import './App.css';

class App extends Component {
  //code
  // http://michaelsoriano.com/react-bootstrap-form-validation/
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      error: true,
      errortxt: "Error Text",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  hasError(date) {
    return true;
    // return true/false if date valid?
    // return this.state.errors.indexOf(key) !== -1;
  }
  
  isValidDate(dateString)
    {
        // First check for the pattern
        if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
            return false;

        // Parse the date parts to integers
        var parts = dateString.split("/");
        var day = parseInt(parts[1], 10);
        var month = parseInt(parts[0], 10);
        var year = parseInt(parts[2], 10);

        // Check the ranges of month and year
        if(year < 1000 || year > 3000 || month === 0 || month > 12)
            return false;

        var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

        // Adjust for leap years
        if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
            monthLength[1] = 29;

        // Check the range of the day
        return day > 0 && day <= monthLength[month - 1];
    };
    
 

  handleInputChange(event) {
    console.log("CHANGE", event.target.value);
    console.log("is valid: ",this.isValidDate(event.target.value) );
    //
    this.isValidDate(event.target.value) ? this.setState({error: false}) : this.setState({error: true});
    this.setState({errortxt:"Changing..."});
    this.isValidDate(event.target.value) ? this.setState({errortxt: "Yay!"}) : this.setState({error: "hmmm"});
    // if(event.target.value === "a"){
      // this.setState({error: false});
      // Validates that the input string is a valid date formatted as "mm/dd/yyyy"
      /*
      https://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript
      */
      // }
    var key = event.target.name;
    var value = event.target.value;
    var obj = {};
    obj[key] = value;
    this.setState(obj);
  }

  //
  render() {
    return (
      <div className="App">
        <Container className="p-3 text-left">
          <Jumbotron >
            <div>
              <h1 className="font-weight-light text-primary">
                Digitickets Text Input
              </h1>
              <h2 className="font-weight-light text-primary">
                Please enter a valid historical date using the format DD/MM/YYYY
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
                    placeholder="DD/MM/YYYY" 
                    size="lg"
                    className={
                    this.state.error
                      ? "form-control is-invalid"
                      : "form-control is-valid"
                    }
                    name="firstname"
                    value={this.state.firstname}
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
