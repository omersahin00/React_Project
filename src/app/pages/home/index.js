import React from 'react';
import logo from "../../../logo.svg";
import useStyles from "./syles";


const MyButton = () => {
    const classes = useStyles();

    return (
        <button className={ classes.button }>Test Button</button>
    );
}

const Home = () => {
    return (
        <div>
            <header >
                {/* <img src={logo} alt="logo" /> */}
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <br />
                <MyButton />
            </header>
        </div>
    );
}

export default Home;