import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function RDNavBar({user, setUser}) {
    
    const history = useHistory();
    
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
            <Button as={Link} to="/recipe-results" exact>Back to search results</Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button variant="outline" onClick={handleLogoutClick}>Logout</Button>
        </div>
    )
};

export default RDNavBar;