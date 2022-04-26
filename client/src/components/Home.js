import React, { useState } from "react";
import styled from "styled-components";

function Home() {
  
    return (
      <Wrapper>
          <h1>home</h1>
      </Wrapper>
    );
  }
  
  const Logo = styled.h1`
    font-family: "Permanent Marker", cursive;
    font-size: 3rem;
    color: deeppink;
    margin: 8px 0 16px;
  `;
  
  const Wrapper = styled.section`
    max-width: 500px;
    margin: 40px auto;
    padding: 16px;
  `;
  
  const Divider = styled.hr`
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 16px 0;
  `;
  
  export default Home;