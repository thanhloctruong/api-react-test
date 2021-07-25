import React from "react";
import "./App.css";
import Menu from "./components/menu/Menu";

import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const showContentMenus = (routes) => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return <Route key={index} path={route.path} exact={route.exact} component={route.main} />;
    });
  }
  return <Switch>{result}</Switch>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <div className="container">
          <div className="row"></div>
          {showContentMenus(routes)}
        </div>
      </Router>
    </div>
  );
}

export default App;
