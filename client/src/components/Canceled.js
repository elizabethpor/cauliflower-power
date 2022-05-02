import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../styles";

const Canceled = () => {
    return (
        <div className="sr-root">
            <div className="sr-main">
                <header className="sr-header">
                <div className="sr-header__logo"></div>
                </header>
                <div className="sr-payment-summary completed-view">
                <h1>Your payment was canceled</h1>
                <Button as={Link} to="/" exact>Back to home</Button>
                </div>
            </div>
        </div>
    );
};

export default Canceled;