import React from 'react';
import './mainblock.css';
import App from '../App'
import Header from '../Header/header';

function MainBlock() {
    return (
        <div>
            <div id="header">
                <Header />
            </div>

            <div id="app"><App /></div>
        </div>
    );
}

export default MainBlock;
