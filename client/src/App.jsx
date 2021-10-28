import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "components/constants/Navbar";
import Landing from "components/layout/Landing";
import Register from "components/auth/Register";
import Login from "components/auth/Login";
import "styles/App.css";

const App = () => (
  <Router>
    <Fragment>
      {/* <Navbar /> */}
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
