import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import NavBar from "./NavBar";

function Home({user, setUser, setSelectedIngredients}) {
  
    return (
      <Grid container spacing={2} wrap="wrap">
        <Grid item xs={2} md={2}>
          <NavBar user={user} setUser={setUser} setSelectedIngredients={setSelectedIngredients}/>
        </Grid>
        <Grid item xs={10} md={10}>
          <h1>home</h1>
          {!user ?  <p >Welcome to CauliflowerPower - the app designed to help you cook nutritious, wholesome, affordable food and reduce food waste. 
            This project originated from a recipe book I wrote a couple of years ago. You can learn more about the book and purchase it by clicking the button on the left. 
            To access the app features please click the login button on the left and start your journey!
          </p> :
            <p >Welcome back to CauliflowerPower - the app designed to help you cook nutritious, wholesome, affordable food and reduce food waste. 
            This project originated from a recipe book I wrote a couple of years ago. You can learn more about the book and purchase it by clicking the button on the left. 
            To access the app features please click the "Ingredients list" button on the left and start your journey!
          </p>}
        </Grid>
      </Grid>
    );
  }
  
  export default Home;