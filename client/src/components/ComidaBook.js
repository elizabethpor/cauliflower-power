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
                <p>I wrote this book to inspire people to make wholesole, nutricious, delicious food on a budget. It contains 28 original recipes to easily design your own 4-week-cycle menu. In an effort to reduce food waste, many ingredients are repeated in the recipes but cooked/used uin different ways. The recipes pay attention to allergies: they are all vegan (with options to add non-vegan ingredients), nut free, and most of them are gluten free. This book was inspired by my career in the foodservice industry where meals - called Comida - served to staff are usually none of the above. Recipes are designed to be scalable, starting with 2 people or 10 people. I hope you'll enjoy making and eating this food as much as I do!</p>
                <ComidaPhotoGallery />
                <Button as={Link} to="/checkout" exact>Purchase the book </Button>
            </Grid>
        </Grid>
        </div>
    )
};

export default ComidaBook;