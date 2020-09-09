import React from "react";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "../scrollToTop/ScrollToTop";

const Routes = (props) => {
  return (
    <ScrollToTop>
      <Switch>
        <Route path={props.routePath} exact component={props.routeComponent} />
      </Switch>
    </ScrollToTop>
  );
};

export default Routes;
