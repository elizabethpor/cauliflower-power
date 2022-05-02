import React from 'react';
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function CBNavBar({user, setUser}) {
    
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
            {!user ?
                <Button as={Link} to="/">Back to home</Button>
                :
                <>
                <Button as={Link} to="/ingredients" exact>Back to ingredients</Button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Button variant="outline" onClick={handleLogoutClick}>Logout</Button>
                </>
            }
        </div>
    )
};

export default CBNavBar;