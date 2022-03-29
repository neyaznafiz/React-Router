import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fancy React Router website!!!</h1>

            <nav>
                <a href="/">Home</a>
                <a href="/friends">Friends</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;