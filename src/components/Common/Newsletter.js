import React from 'react';
import SubscribeForm from '../Elements/Subscribe/SubscribeForm';

const Newsletter = () => {

    return (
        <div className="newsletter-area pt-75 pb-40">
            <div className="single-newsletters">
                <div className="newsletter-form">
                    <SubscribeForm />
                </div>
            </div>
        </div>
    );
}

export default Newsletter;