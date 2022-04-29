import React from 'react';
import Recipe from "./Recipe";
import RRNavBar from "./RRNavBar";

function RecipeResults({user, setUser}) {

    return (
        <div>
            <RRNavBar  user={user} setUser={setUser}/>
            {/* {recipes.map((recipe) => (
                <Recipe key={recipe.id} />
            ))} */}
        </div>
    )
};

export default RecipeResults;