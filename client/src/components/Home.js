import React from "react";
import Grid from '@mui/material/Grid';
import NavBar from "./NavBar";

function Home({user, setUser, setSelectedIngredients}) {
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const queryParams = new URLSearchParams(window.location.search)
  const canceled = queryParams.get("canceled")

    return (
      <Grid container spacing={2} wrap="wrap">
        <Grid item xs={2} md={2} >
          <NavBar user={user} setUser={setUser} setSelectedIngredients={setSelectedIngredients}/>
        </Grid>
        <Grid item xs={10} md={10} >
          {!user ?  <><h1>Welcome!</h1><p> This app is designed to help you cook nutritious, wholesome, affordable food and reduce food waste.
            <br></br>
            <br></br>
            This project originated from a recipe e-book I wrote a couple of years ago, titled Comida. 
            <br></br>
            <br></br>
            You can learn more about the book and purchase it by clicking the button on the left. 
            <br></br>
            <br></br>
            To access the app features please click the "Login" button on the left and start your journey!
            
          </p> </> :
            <><h1>Welcome back {capitalizeFirstLetter(user.username)}!</h1><p > This app is designed to help you cook nutritious, wholesome, affordable food and reduce food waste. 
            <br></br>
            <br></br>
            Click the "Fresh ingredients" button on the left to continue your yummy journey...
            <br></br>
            <br></br>
            ...and don't forget to check out the e-book!
          </p></> }
          <div>
            {canceled ? "payment canceled" : "hi"}
          </div>

        </Grid>
      </Grid>
    );
  }

  export default Home;