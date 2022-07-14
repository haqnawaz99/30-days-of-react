import React from "react";
import ReactDOM from "react-dom";

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const sayHi = () => {
    alert("Hi");
  };

  return (
    <div className="app">
      <Button text="Say Hi" onClick={sayHi} />
    </div>
  );
};
const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
