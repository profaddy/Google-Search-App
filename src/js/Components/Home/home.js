import React, { Component } from "react";

import Searchbar from "../Searchbar/Searchbar";

import { SearchlistItems } from "../../Components/SearchList/SearchlistItems";

import { SearchlistDetails } from "../../Components/SearchList/SearchlistDetails";

import _ from "lodash";

import { connect } from "react-redux";

import {
  fetchResultsOnChange,
  fetchResultsOnSubmit
} from "../../Actions/searchActions";

import "../../../style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false
    };
  }

  handleOnSubmit = ser_term => {
    this.props.dispatch(fetchResultsOnSubmit(ser_term));
    this.setState({ isSubmit: true });
  };
  handleOnSearch = ser_term => {
    this.props.dispatch(fetchResultsOnChange(ser_term));
  };

  render() {
    let content;
    const myState = this.state;
    const { ser_list, suggestions, history } = this.props;

    if (myState.isSubmit === true) {
      content = ser_list.map(ser_list => (
        <SearchlistDetails ser_list={ser_list} history={history} />
      ));
    } else {
      content = suggestions.map(suggestions => (
        <SearchlistItems suggestions={suggestions} history={history} />
      ));
    }

    return (
      <div class="container no-gutters">
        <div class="row">
          <div className="Login-wrapper col-sm-12 justify-content-center">
            <Searchbar
              handleonSearch={_.debounce(ser_term => {
                this.handleOnSearch(ser_term);
              }, 300)}
              handleOnSubmit={ser_term => {
                this.handleOnSubmit(ser_term);
              }}
            />
          </div>
          <div className="Login-wrapper col-sm-12 justify-content-center">
            {content}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  suggestions: state.suggestions,
  ser_list: state.ser_list
});

export default connect(mapStateToProps)(Home);
