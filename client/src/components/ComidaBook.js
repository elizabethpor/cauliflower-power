import React from 'react';
import Grid from '@mui/material/Grid';
import CBNavBar from './CBNavBar';
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import ComidaPhotoGallery from './ComidaPhotoGallery';

function ComidaBook({user, setUser}) {

    return (
        <div>
        <Grid container spacing={2}>
            <Grid item xs={2} md={2}>
                <CBNavBar user={user} setUser={setUser}/>
            </Grid>
            <Grid item xs={10} md={10}>

                <h1>Comida</h1>
                <h3>- a recipe book -</h3>
                <p>I spent many happy years working in the food service industry; as barista, busser, server, bartender, manager, and chef.
When restaurants serve food to their staff during a shift, it’s called family meal, or often, simply “Comida.” 
From the point of view of staff, Comida is an opportunity for their work-family to come together and enjoy food. It’s also an opportunity for a restaurant to show their most important asset that they are valued. Unfortunately, all too often, Comida is not delicious, nutritions, or wholesome. 

When Comida is unhealthy and discourteous of food restrictions, a kind gesture turns into a point of frustration for staff. I wrote this book to make a simple path to better Comida. It contains 28 original recipes that are delicious, nutritions, or wholesome. 
The recipes are inexpensive, ingredient-flexible (86 food waste!) and mindful of a wide range of food preferences. Most recipes are gluten-free and all are nut free and vegan (with options to add non-vegan ingredients on the side).
Recipes are designed to be easily scalable in quantity and they preserve well if made ahead and refrigerated.
Whether you work in a restaurant or want to use this manual at home, I hope you enjoy making and serving this food to all the families in your life!
<br></br>
<br></br>
-Elizabeth</p>
<br></br>
                <ComidaPhotoGallery />
                <Button as={Link} to="/checkout" exact>Purchase the e-book</Button>
            </Grid>
        </Grid>
        </div>
    )
};

export default ComidaBook;