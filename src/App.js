import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer.js";
import Home from "./pages/Home";
import { Header } from "./components/Header";
import { useStateValue } from "./components/StateProvider/StateProvider";
import { auth } from "./firebase/config";
import Login from "./pages/Login";
import Category from "./components/Category";
import Product from "./components/Product";

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
      <div className="">
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/category/:categoryName" component={Category} />
            <Route path="/product/:productId" component={Product} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
