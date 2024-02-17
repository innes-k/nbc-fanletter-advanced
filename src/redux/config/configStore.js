// import { createStore, combineReducers } from "redux";
import { letters } from "redux/modules/lettersSlice";
import { member } from "redux/modules/memberSlice";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({ letters, member });

// const store = createStore(rootReducer, devToolsEnhancer());

const store = configureStore({
  reducer: { letters, member },
});

export default store;
