import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";

import Home from "./Home.js";
import UXUI from "./UXUI.js";
import Branding from "./Branding.js";
import Illustration from "./Illustration.js";
import Photo from "./Photo.js";
import Project from "./Project.js";

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
