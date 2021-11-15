import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../src/components/Nav/Nav";
import Main from "./pages/Main/Main";
import DetailPage from "./pages/DetailPage/DetailPage";
import Cart from "./pages/Cart/Cart";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/DetailPage" component={DetailPage} />
          <Route exact path="/Cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
