import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Counter = () => {

    const [isViewCount, setIsViewCount] = useState(false);

    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setIsViewCount(!isViewCount);
        }
    }

    const counters = [
        {
            countNum: 20,
            countTitle: 'Happy Clients',
            counterPrefix: 'k',
            counterClass: 'rs-count purple-color'
        },
        {
            countNum: 25,
            countTitle: 'Years Experience',
            counterPrefix: '+',
            counterClass: 'rs-count blue-color'
        },
        {
            countNum: 95,
            countTitle: 'Products',
            counterPrefix: '+',
            counterClass: 'rs-count pink-color'
        },
        {
            countNum: 50,
            countTitle: 'Expert Engineers',
            counterPrefix: '+',
            counterClass: 'rs-count paste-color'
        }

    ];

    return (
        <div className="rs-counter style3 gray-bg modify2 pt-90 pb-80">
            <div className="container">
                <div className="counter-top-area">
                    {counters &&
                        <div className="row">
                            {counters.map((counter, num) => (
                                <div key={num} className="col-lg-3 col-sm-6 md-mb-40">
                                    <div className="counter-list md-center">
                                        <div className="counter-text">
                                            <h3 className="count-number">
                                                <div className={counter.counterClass}>
                                                    <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
                                                        <CountUp end={!isViewCount ? counter.countNum : 0} />
                                                    </VisibilitySensor>
                                                    <span className="counter-prefix">{counter.counterPrefix}</span>
                                                </div>
                                            </h3>
                                            <h3 className="title">{counter.countTitle}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Counter;