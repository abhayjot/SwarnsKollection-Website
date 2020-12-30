import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import ProductList from "./components/ProductList.js";
import Error from "./components/Error.js";
import Navigation from "./NavBar.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product/:name" component={ProductList} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

/*
<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">I see what you did there</h1>
        </header>
        <p className="App-intro">Done eating dinner?</p>
      </div>
*/
