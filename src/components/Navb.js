// FileName: Navb.js

import React from "react";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
    return (
        <nav>
            <h1>Music Player Test App with React</h1>
            <button
                onClick={() => {
                    setLibraryStatus(!libraryStatus);
                }}
            >
                <h4>Library</h4>
            </button>
        </nav>
    );
};

export default Nav;