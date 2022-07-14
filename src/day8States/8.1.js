// index.js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // declaring state
  state = {
    count: 0,
  };
  render() {
    // accessing the state value
    const count = this.state.count;
    return (
      <div className="App">
        <h1>{count} </h1>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
