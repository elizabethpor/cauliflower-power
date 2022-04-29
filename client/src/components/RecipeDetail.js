import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import RDNavBar from "./RDNavBar";
import { Link, useParams } from "react-router-dom";

function RecipeDetail({user, setUser}) {
    const [recipe, setRecipe] = useState([])

  function LoadItem(id) {
    fetch(`/recipes/${id}`)
      .then(r => r.json())
      .then(recipe => {
          console.log(recipe)
        setRecipe(recipe);
      })
  }

  const data = useParams();
  // console.log("params:",data)
  // console.log("windows",window.location.pathname)
  useEffect(() => {
    LoadItem(data.id);
  }, [data]);
 
  const ingredients = recipe.ingredient_list.map((ingredient) => <li>{ingredient}</li>);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={2} md={2}>
                    <RDNavBar  user={user} setUser={setUser}/>
            </Grid>
            <Grid item xs={12} md={12}></Grid>
                <h1>{recipe.name}</h1>
                <h3>{recipe.allergy_code}</h3>
                <h2>Ingredients list:</h2>
                <ul>
                    {ingredients}
                </ul>
                <h2>Instructions</h2>
                <p>{recipe.instructions}</p>
            </Grid>
        </div>
    )
    // return (
    //     <div>
    //         <Grid container spacing={2}>
    //         <Grid item xs={2} md={2}>
    //             <RDNavBar  user={user} setUser={setUser}/>
    //         </Grid>
    //         <Grid item xs={12} md={12}></Grid>
            
    //         </Grid>
    //     </div>
    // )
};

export default RecipeDetail;