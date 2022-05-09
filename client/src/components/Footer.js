import React from 'react';
import styled from "styled-components";
import footer from "../assets/footer.png";
import star from "../assets/star.png";

function Footer() {

    return (
        <>
        <Wrapper>
            {/* <Img src={footer} alt="header banner"></Img> */}
            <Credits> © coded and designed by:  <A href="https://www.linkedin.com/in/elizabethporporato/" target="_blank">Elizabeth Porporato  </A><Logo src={star} alt="logo"></Logo>   <Logo src={star} alt="logo"></Logo>   <Logo src={star} alt="logo"></Logo>   artwork by:  <A href="https://www.instagram.com/annie.in.color" target="_blank">  Annie Schmid</A></Credits>
        </Wrapper>
    </>
    )
};

const A = styled.a`
color: white;
text-decoration: none;
&:hover {
    // color: #1E3149;
    background-color: #C93818;
}
`;

const Wrapper = styled.footer`
    height: 10%;
    margin-top: 1%;
    padding: 1%;
    // background-color: #C93818;
    background-color: #1E3149;
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    // color: white;
    text-align: center;
    
    `;
const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const Credits = styled.p`
    font-family: 'Caveat', cursive;
    font-size: 20px;
    font-weight: lighter;
    color: white;
    text-align: center;
    text-decoration: none;
`;

const Logo = styled.img`
    width: 20px;
    heoght: 20px;
`;

export default Footer;