import axios from "axios";

export function fetchResultsOnChange(ser_term) {
  return function(dispatch) {
    dispatch({ type: "FETCH_ON_CHANGE" });

    axios
      .get(`http://demo2769628.mockable.io/search-list?search=${ser_term}`)
      .then(response => {
        dispatch({
          type: "FETCH_ON_CHANGE_FULLFILLED",
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_ON_CHANGE_REJECTED", payload: err });
      });
  };
}

export function fetchResultsOnSubmit(ser_term) {
  return function(dispatch) {
    dispatch({ type: "FETCH_ON_SUBMIT" });

    axios
      .get(`http://demo2769628.mockable.io/suggestions?search=${ser_term}`)
      .then(response => {
        dispatch({
          type: "FETCH_ON_SUBMIT_FULLFILLED",
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_ON_SUBMIT_REJECTED", payload: err });
      });
  };
}
