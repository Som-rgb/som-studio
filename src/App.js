import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import UXUI from "./UXUI.js";
import Branding from "./Branding.js";
import Illustrations from "./Illustrations.js";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/ux-ui" component={UXUI} />
          <Route exact path="/branding" component={Branding} />
          <Route exact path="/illustrations" component={Illustrations} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
