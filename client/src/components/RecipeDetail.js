import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import RDNavBar from "./RDNavBar";
import { Link, useParams } from "react-router-dom";
import { Button } from "../styles";

function RecipeDetail({user, setUser}) {
    const [recipe, setRecipe] = useState()
    const [isFavorite, setIsFavorite] = useState(false)

  function LoadItem(id) {
    fetch(`/recipes/${id}`)
      .then(r => r.json())
      .then(recipe => {
        console.log(recipe)
        setRecipe(recipe);
      })
  }

  const data = useParams();

  useEffect(() => {
    LoadItem(data.id);
  }, [data]);

  if (!recipe) return null

  const ingredients = recipe.ingredient_list.map((ingredient) => <li>{ingredient}</li>);

  function handleUnfavor() {
    setIsFavorite(false)
    //delete
    fetch(`/remove-fav-recipe/${recipe.id}`, {
      method: "DELETE",
  })
      .then((r) => r.json())
      .then((unfavoredRecipe) => console.log(unfavoredRecipe));
  };

  function handleFavor() {
    setIsFavorite(true)
    // post
    fetch(`/add-fav-recipe/${recipe.id}`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe.id)
  })
      .then((r) => r.json())
      .then(data => console.log(data));
  };

    return (
        <div>
            <Grid container spacing={2} wrap="wrap">
                <Grid item xs={2} md={2}>
                    <RDNavBar  user={user} setUser={setUser}/>
            </Grid>
            <Grid item xs={10} md={10}>
                <h1>{recipe.name}</h1>
                <h3>{recipe.allergy_code}</h3>
                {isFavorite ? 
              <Button variant="fill" onClick={handleUnfavor}>Saved as favorite</Button>
              :
              <Button variant="outline" onClick={handleFavor}>Save as favorite</Button>
              }
                <h2>Ingredients list:</h2>
                <ul>
                    {ingredients}
                </ul>
                <h2>Instructions</h2>
                <p>{recipe.instructions}</p>

                {/* <Button onClick={handleClick}>{isFavorite ? "Save as favorite" : "Saved as favorite"}</Button> */}
            </Grid>
            </Grid>
        </div>
    )
};

export default RecipeDetail;