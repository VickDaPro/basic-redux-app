import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers";

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // STORE - Globalised state

// // ACTIONS - Describe what you wanna do --> Increment
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// //REDUCER
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// let store = createStore(counter);

// //Displaying it in the console
// store.subscribe(() => console.log(store.getState()));

// //DISPATCH
// store.dispatch(increment());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
