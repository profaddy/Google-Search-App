import React from "react";

import { Button, FormGroup, FormControl } from "react-bootstrap";

class Searchbar extends React.Component {
  constructor() {
    super();
    this.state = {
      ser_term: ""
    };
  }

  handleOnChange = event => {
    event.preventDefault();
    const ser_term = event.target.value;
    this.setState({ ser_term });
    this.props.handleonSearch(ser_term);
  };

  render() {
    console.log("entering render searchbar props", this.props);
    return (
      <div>
        <div class="col-sm-6 Login_form">
          <h3>Contact Search</h3>
          <form>
            <FormGroup controlId="formBasicText">
              <FormControl
                type="text"
                value={this.state.ser_term}
                placeholder="Enter Keyword to search"
                onChange={event => this.handleOnChange(event)}
              />
              <FormControl.Feedback />
            </FormGroup>
            <Button type="submit" onClick={event => this.handleOnSubmit(event)}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Searchbar;
