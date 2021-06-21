import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header.js";

function App() {
  return (
    <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/AboutYou" component={AboutYou} />
      <Route path="/AboutAginic" component={AboutAginic} />
      <Route path="/Roadmap" component={Roadmap} />
      <Route path="/Resources" component={Resources} />
    </Switch>
  </Router>
  );
}

export default App;
