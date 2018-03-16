import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class Header extends Component {

    render() {

        return (
            <header className="l-header header">
                <div className="l-container">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1 className="header__title">Welcome to React</h1>
                    <nav className="menu-main">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/edit">Edit</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
