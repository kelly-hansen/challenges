import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import SignupForm from './components/SignupForm'
import Carpentr from './components/carpentr';
import ReactStepper from './components/react-stepper';

function App() {
  return <ReactStepper />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
