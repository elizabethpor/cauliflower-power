import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../styles";

function INavBar({user, setUser}) {

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
        <>
            <Button as={Link} to="/comida-book" exact>Book</Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button as={Link} to="/staple-ingredients" exact>Staple ingredients</Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button variant="outline" onClick={handleLogoutClick}>Logout</Button>
        </>
    );
    }

export default INavBar;