import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./App.css";
import { Button } from "../styles";

const ProductDisplay = () => (
    <section>
        <div className="product">
        <img 
            class="w-10"
            src={process.env.PUBLIC_URL + "/assets/comida-cover.png"}
            alt="The cover of Comida book"
        />
        <div className="description">
        <h3>Comida book</h3>
        <h5>$15.00</h5>
        </div>
        </div>
        <form action="/charges" method="POST">
        <Button type="submit">Checkout</Button>
        <Button as={Link} to="/comida-book" exact>Back</Button>
        </form>
    </section>
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
export default Checkout;