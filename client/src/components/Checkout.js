import React, { useState, useEffect } from "react";
// import "./App.css";
import { Button } from "../styles";

const ProductDisplay = () => (
    <section>
        <div className="product">
        <img
            src="https://i.imgur.com/EHyR2nP.png"
            alt="The cover of Comida book"
        />
        <div className="description">
        <h3>Comida book</h3>
        <h5>$15.00</h5>
        </div>
        </div>
        <form action="/charges" method="POST">
        <Button tyoe="submit">Checkout</Button>
        {/* <button type="submit">
            Checkout
        </button> */}
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