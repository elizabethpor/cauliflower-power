import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../styles";

function RRNavBar({user, setUser, setSelectedIngredients}) {
    
    const history = useHistory();
    
    function handleBackClick() {
        setSelectedIngredients([])
        history.push("/ingredients")
    }

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setUser(null);
            history.push("/")
        }
        });
    }
    return (
        <div>
            <h2>Allergy codes:</h2>
            <h3>GF: gluten free</h3>
            <h3>VE: vegan</h3>
            <h3>NF: nut free</h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button onClick={handleBackClick}>Fresh ingredients</Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button variant="outline" onClick={handleLogoutClick}>Logout</Button>
        </div>
    )
};

export default RRNavBar;