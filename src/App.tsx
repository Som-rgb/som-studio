import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./Home";
import UXUI from "./UXUI";
import Branding from "./Branding";
import Illustration from "./Illustration";
import Photo from "./Photo";
import Project from "./Project";

const App = () => {
  return (
    <div>
      <Container>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/ux-ui" component={UXUI} />
            <Route exact path="/branding" component={Branding} />
            <Route exact path="/illustration" component={Illustration} />
            <Route exact path="/photo" component={Photo} />
            <Route exact path="/project" component={Project} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
        <div>
          <Footer />
        </div>
      </Container>
    </div>
  );
};

export default App;
