import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Home/index";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Router;
