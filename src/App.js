import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import Home from "./Home.js";
import UXUI from "./UXUI.js";
import Branding from "./Branding.js";
import Illustration from "./Illustration.js";
import Photo from "./Photo.js";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/ux-ui" component={UXUI} />
          <Route exact path="/branding" component={Branding} />
          <Route exact path="/illustration" component={Illustration} />
          <Route exact path="/photo" component={Photo} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
