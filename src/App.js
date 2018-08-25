import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store/";
import DummyComponent from "./components/DummyComponent/";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <DummyComponent />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
