import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
