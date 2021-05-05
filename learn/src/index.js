import React from "react";
import ReactDOM from "react-dom";
import SignupForm from './components/SignupForm'
import Carpentr from './components/carpentr';
import ReactStepper from './components/react-stepper';

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
