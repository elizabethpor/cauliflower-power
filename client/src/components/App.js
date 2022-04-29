import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import IngredientList from "./IngredientList";
import Checkout from './Checkout';
import Success from './Success';
import Canceled from './Canceled';
import './App.css';

function App() {

  const [user, setUser] = useState(null);

  const history = useHistory()


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        history.push("/")
      };
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home user={user} setUser={setUser}/> 
        </Route>
        <Route exact path="/login">
          <Login onLogin={setUser} />
        </Route>
        <Route exact path="/ingredients">
          <IngredientList />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
        <Route exact path="/canceled">
          <Canceled />
        </Route>
      </Switch>
    </>
  );
};
export default App;
