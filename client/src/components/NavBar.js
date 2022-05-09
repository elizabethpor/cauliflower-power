import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../styles";


function NavBar({ user, setUser, setSelectedIngredients}) {
    const history = useHistory();
    
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setUser(null);
            history.push("/")
        }
        });
    }

    function handleClick() {
        setSelectedIngredients([])
        history.push("/ingredients")
    }

    return (
        <>
            {!user ? <Button as={Link} to="/login" exact>
            Login
            </Button> :
            <>
            <Button variant="outline" onClick={handleLogoutClick}>
            Logout
            </Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button onClick={handleClick}>Fresh ingredients</Button>
            </>}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button as={Link} to="/comida-book" exact>Book</Button>
        </>
    );
    }

    export default NavBar;