import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import cover from "../assets/cover.jpg"

const ProductDisplay = () => (
    <Wrapper>
    <section>
        <div className="product">
        <Img 
            src={cover}
            alt="The cover of Comida book"
        />
        <div className="description">
        <h3>e-book</h3>
        <h5>$15.00</h5>
        </div>
        </div>
        <form action="/charges" method="POST">
        <Button type="submit">Checkout</Button>
        <Button as={Link} to="/comida-book" exact>Back</Button>
        </form>
    </section>
    </Wrapper>
);

const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);

function Checkout() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
        setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
        setMessage(
            "Order canceled -- checkout when you're ready."
        );
        }
    }, []);

    return message ? (
        <Message message={message} />
    ) : (
        <ProductDisplay />
    );
}

const Wrapper = styled.form`
    text-align: center;
`;

const Img = styled.img`
    width: 300px;
    height: auto;
`;

export default Checkout;