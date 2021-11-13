import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
