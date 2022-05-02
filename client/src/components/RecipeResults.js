import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Recipe from "./Recipe";
import RRNavBar from "./RRNavBar";

function RecipeResults({user, setUser}) {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("/recipes").then((r) => {
            if (r.ok) {
                r.json().then((recipes) => {
                // console.log(recipes)
                setRecipes(recipes)
                });
            }
        });
    }, []);


    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={2} md={2}>
                <RRNavBar  user={user} setUser={setUser}/>
            </Grid>
            <Grid item xs={10} md={10}>
            <ImageList sx={{ width: 1000, height: 800 }} cols={3}>
                    <br></br>
                    <ImageListItem key="Subheader" cols={3}>
                    </ImageListItem>
                    {recipes.map((recipe) => (
                        <Recipe key={recipe.id} recipe={recipe} />
                    ))}
                </ImageList>
                {/* {recipes.map((recipe) => (
                    <div>
                    <Recipe key={recipe.id} recipe={recipe}/>
                    </div>
                ))} */}
            </Grid>
            </Grid>
        </div>
    )
};

export default RecipeResults;