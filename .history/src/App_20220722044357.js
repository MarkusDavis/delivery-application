import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer.js";
import Home from "./pages/Home";
import { Header } from "./components/Header";
import { useStateValue } from "./components/StateProvider/StateProvider";
import { auth } from "./firebase/config";
import Login from "./pages/Login";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route path="/login">
              <Header />
              <Login />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
