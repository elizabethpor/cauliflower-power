import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import styled from "styled-components";
import NavBar from "./NavBar";

function Home({user, setUser, setSelectedIngredients}) {
  
    return (
      <Grid container spacing={2} wrap="wrap">
        <Grid item xs={2} md={2}>
          <NavBar user={user} setUser={setUser} setSelectedIngredients={setSelectedIngredients}/>
        </Grid>
        <Grid item xs={10} md={10}>
          {!user ?  <><H1>Welcome!</H1><p> This app is designed to help you cook nutritious, wholesome, affordable food and reduce food waste.
            <br></br>
            <br></br>
            This project originated from a recipe e-book I wrote a couple of years ago, titled Comida. 
            <br></br>
            <br></br>
            You can learn more about the book and purchase it by clicking the button on the left. 
            <br></br>
            <br></br>
            To access the app features please click the login button on the left and start your journey!
            
          </p> </> :
            <><h1>Welcome back!</h1><p > The app designed to help you cook nutritious, wholesome, affordable food and reduce food waste. 
            <br></br>
            <br></br>
            This project originated from a recipe book I wrote a couple of years ago. You can learn more about the book and purchase it by clicking the button on the left.
            <br></br>
            <br></br>
            To access the app features please click the "Ingredients list" button on the left and start your journey!
          </p></> }
        </Grid>
      </Grid>
    );
  }
  
  const H1 = styled.h1`
  text-align: left;
  `;

  export default Home;