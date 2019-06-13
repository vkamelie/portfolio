import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";
import Projects from "./Component/Projects/Projects";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
);
