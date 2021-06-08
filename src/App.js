import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fbAuth } from "./Services/firebase";
import { useStateValue } from "./Services/StateProvider";

import logo from "./logo.svg";
import "./App.css";

import Home from "./Screens/Home";
import Header from "./Screens/Header";
import Login from "./Screens/Login";
import Checkout from "./Screens/Checkout";

function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  React.useEffect(() => {
    // will only run once when the app component loads...

    fbAuth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
