import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../styles";
const Success = () => {

    return (
        <div className="sr-root">
            <div className="sr-main">
                <header className="sr-header">
                <div className="sr-header__logo"></div>
                </header>
                <div className="sr-payment-summary completed-view">
                <h1>Thank you for your purchase!</h1>
                <p>You will receive an email containing the e-book shortly</p>
                <Button as={Link} to="/" exact>Home</Button>
                </div>
                <div className="sr-section completed-view">
                {/* work in progress: add the ability to download PDF after purchase */}
                {/* <Link to="/">Download the PDF</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Success;