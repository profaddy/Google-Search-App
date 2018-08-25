export default function reducer(
  state = {
    serList: [],
    fetching: true,
    fetching_error: false,
    fetched: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case "FETCH_ON_SUBMIT_FULLFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        serList: action.payload
      };
    }
    case "FETCH_ON_SUBMIT_REJECTED": {
      let newState = { ...state };
      newState.error = action.payload;
      (newState.fetching_error = true), (newState.fetching = false);
      return newState;
    }
  }

  return state;
}
