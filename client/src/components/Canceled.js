import React from 'react';
import { Link } from 'react-router-dom';

const Canceled = () => {
    return (
        <div className="sr-root">
            <div className="sr-main">
                <header className="sr-header">
                <div className="sr-header__logo"></div>
                </header>
                <div className="sr-payment-summary completed-view">
                <h1>Your payment was canceled</h1>
                <Link to="/">Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Canceled;