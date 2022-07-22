import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer.js";
import Home from "./pages/Home";
import { Header } from "./Header";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/">
            {Header()}
            <Home />{" "}
            <Route path="/login">
              {/* <Header /> */}
              <Login />
            </Route>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;

