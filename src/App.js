import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider>
          <div className="App" />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
