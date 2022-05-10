import React from 'react';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Recipe from "./Recipe";
import RRNavBar from "./RRNavBar";

function RecipeResults({user, setUser, recipes, setSelectedIngredients}) {

    return (
        <div>
            <Grid container spacing={2} wrap="wrap">
            <Grid item xs={2} md={2}>
                <RRNavBar  user={user} setUser={setUser} setSelectedIngredients={setSelectedIngredients}/>
            </Grid>
            <Grid item xs={10} md={10}>
            <ImageList sx={{ width: 1000, height: 400 }} cols={4} gap={8}>
                    {recipes.map((recipe) => (
                        <Recipe key={recipe.id} recipe={recipe} />
                    ))}
                </ImageList>
            </Grid>
            </Grid>
        </div>
    )
};

export default RecipeResults;