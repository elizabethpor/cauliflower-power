import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import IngredientList from "./IngredientList";
import StapleIngredients from "./StapleIngredients";
import RecipeResults from "./RecipeResults";
import RecipeDetail from "./RecipeDetail";
import ComidaBook from "./ComidaBook";
import Checkout from './Checkout';
import Success from './Success';
import Canceled from './Canceled';
import './App.css';

function App() {

  const [user, setUser] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const history = useHistory()


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        history.push("/ingredients")
      };
    });
  }, []);

      // fetch ingredients
    useEffect(() => {
      fetch("/ingredients").then((r) => {
        if (r.ok) {
          r.json().then((ingredients) => {
          console.log(ingredients)
          setIngredients(ingredients)
          });
        }
      })
    }, []);

  function onSubmitIngredients() {
    fetch(`/recipes?ingredients=${selectedIngredients}`).then((r) => {
      if (r.ok) {
        r.json().then((recipes) => {
        console.log(recipes)
        setRecipes(recipes)
        history.push("/recipe-results")
        });
      }
    })
  };

  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home user={user} setUser={setUser} setSelectedIngredients={setSelectedIngredients}/> 
        </Route>
        <Route exact path="/login">
          <Login onLogin={setUser} />
        </Route>
        <Route exact path="/ingredients">
          <IngredientList ingredients={ingredients} user={user} setUser={setUser} setSelectedIngredients={setSelectedIngredients} onSubmitIngredients={onSubmitIngredients}/>
        </Route>
        <Route exact path="/staple-ingredients">
          <StapleIngredients user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/recipe-results">
          <RecipeResults user={user} setUser={setUser} recipes={recipes} setSelectedIngredients={setSelectedIngredients}/>
        </Route>
        <Route exact path="/recipes/:id">
          <RecipeDetail user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/comida-book">
          <ComidaBook user={user} setUser={setUser}/>
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
