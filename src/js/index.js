//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import {TrafficLight} from "./component/TrafficLight.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
