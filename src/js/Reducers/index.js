import { combineReducers } from "redux";

import suggestions from "./searchOnChange";

import serList from "./searchOnSubmit";

export default combineReducers({
  serList: serList,
  suggestions: suggestions
});
