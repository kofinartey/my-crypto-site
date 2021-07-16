import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Market from "./pages/Market";
import News from "./pages/News";
import Learn from "./pages/Learn";

function CryptoApp() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/market">
          <Market />
        </Route>

        <Route exact path="/news">
          <News />
        </Route>

        <Route exact path="/learn">
          <Learn />
        </Route>
      </Switch>
    </div>
  );
}

export default CryptoApp;
