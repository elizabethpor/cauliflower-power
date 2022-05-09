import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {

    return (
        <div className="sr-root">
            <div className="sr-main">
                <header className="sr-header">
                <div className="sr-header__logo"></div>
                </header>
                <div className="sr-payment-summary completed-view">
                <h1>Your payment succeeded</h1>
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