import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trade from "./pages/trade/Trade";
import News from "./pages/News";
import Learn from "./pages/Learn";

function CryptoApp() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/trade">
          <Trade />
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
