import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import header from "../assets/header.png";

function Header() {
    return (

            <Wrapper>
                <Link to="/" exact>
                    <Img src={header} alt="header banner"></Img>
                </Link>

            </Wrapper>
    )
};


const Wrapper = styled.header`
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 5%;
    display: flex;
    flex-wrap: wrap;
    `;


const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;


    const AppTitle = styled.h1`
    font-family: 'Caveat', cursive;
    font-size: 100px;
    font-weight: lighter;
    color: white;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: fit-content;
    margin: auto;
    `;

export default Header;

