import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Logo from "./components/Logo";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import M8 from "./pages/M8";
import ROB from "./pages/ROB";

const App = () => {
  return (
    <>
      <Router>
        <Logo />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/about" component={About} />

          <Route exact path="/M8" component={M8} />
          <Route exact path="/ROB" component={ROB} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
