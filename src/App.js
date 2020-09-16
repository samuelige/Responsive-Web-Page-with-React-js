import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";

//pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

// import Services from './components/'
// import Portfolio from "./components/Common/Portfolio";

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Route exact={true} path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          {/* <Route path='/services' component={Services} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='team' component={Team} /> */}
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
