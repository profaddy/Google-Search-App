export default function reducer(
  state = {
    suggestions: [],
    fetching: true,
    fetching_error: false,
    fetched: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case "FETCH_ON_CHANGE_FULLFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        suggestions: action.payload
      };
    }
    case "FETCH_ON_CHANGE_REJECTED": {
      let newState = { ...state };
      newState.error = action.payload;
      (newState.fetching_error = true), (newState.fetching = false);
      return newState;
    }
  }

  return state;
}
