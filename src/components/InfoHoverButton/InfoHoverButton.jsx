import React from 'react';
import './InfoHoverButton.css';
import { FaInfoCircle } from "react-icons/fa";


const InfoHoverButton = () => {
    return (
        <>
            <div className="card">
                <span>  <FaInfoCircle /></span>
                <h1>THE PROVIDERS</h1>
                <p>We are providing free source codes for everyone of complete websites</p>
                <p>Thanks for Subscribe our Youtube Channel &nbsp; <button>SUBSCRIBE</button>&nbsp;
                    <img src="https://static.thenounproject.com/png/3680435-200.png" alt="subscribe" />
                </p>
            </div>
        </>
    );
};

export default InfoHoverButton;
