import React from "react";
import "./App.css";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { history } from "./_helpers/history";
import Landing from "./pages/landing";

function App() {
  return (
    <div className="App">
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/expense" render={Landing} />
              <Redirect from="/" to="/expense" />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
