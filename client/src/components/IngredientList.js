import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import INavBar from "./INavBar";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from "../styles";

function IngredientList({ingredients, user, setUser, setSelectedIngredients}) {

    function onIngredientToggle(ingredient) {
        setSelectedIngredients(currentIngredients => {
            if (currentIngredients.includes(ingredient)) {
                return currentIngredients.filter(i => i !== ingredient)
            } else {
            return [...currentIngredients, ingredient]}
        })
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={2} md={2}>
                <INavBar user={user} setUser={setUser}/>
            </Grid>
            <Grid item xs={10} md={10}>

                <h1>What do you have in your fridge?</h1>
                <h3>- select your ingredients -</h3>

                <ImageList sx={{ width: 1000, height: 800 }} cols={4}>
                    <br></br>
                    <ImageListItem key="Subheader" cols={4}>
                    </ImageListItem>
                    {ingredients.map((ingredient) => (
                        <FormControlLabel key={ingredient.id} control={<Checkbox onChange={() => onIngredientToggle(ingredient.name)}/>} label={ingredient.name} />
                    ))}
                </ImageList>
                <br></br>
                <Button type="submit" as={Link} to="/recipe-results">Submit selection</Button>
            </Grid>
        </Grid>
    );
};

export default IngredientList;