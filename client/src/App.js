import React from "react";
import "./App.scss";

// Redux
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>hi</h1>
      </div>
    </Provider>
  );
};

export default App;
