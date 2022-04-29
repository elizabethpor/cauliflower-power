import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
// add some logic: if logged in link to "/ingredients", if not logged in link to "/"
    return (
        <div>
            <Wrapper>
                <AppTitle>
                    <Link to="/" exact>CauliflowerPower</Link>
                </AppTitle>
            </Wrapper>
        </div>
    )
};


const Wrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    `;

    const AppTitle = styled.h1`
    font-family: 'Tapestry', cursive;
    font-weight: lighter;
    font-size: 4rem;
    color: royalBlue;
    margin: 0;
    line-height: 1;

    a {
        color: inherit;
        text-decoration: none;
    }
    `;

export default Header;

