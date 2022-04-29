import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function INavBar({user, setUser}) {

    console.log(window.location.pathname)
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

        {/* <Nav> */}

            <Button as={Link} to="/checkout" exact>Comida book </Button>
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


        {/* </Nav> */}

        </>
    );
    }

    const Wrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    `;


    // const Nav = styled.nav`
    // display: flex;
    // gap: 4px;
    // position: absolute;
    // right: 8px;
    // `;

export default INavBar;