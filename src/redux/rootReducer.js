import { combineReducers } from "@reduxjs/toolkit";
import authorizationReducer from "./Authorization/authorizationSlice";

const rootReducer = combineReducers({
  authorization: authorizationReducer,
});

export default rootReducer;
