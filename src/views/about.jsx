import React, { Component } from 'react';
import { connect } from 'react-redux'

import './style.css';


class About extends Component {

    render() {

        return (

            <div className="l-wrapper">

                {/* begin .l-header */}
                <header className="l-header header">
                    <div className="l-container">
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        <h1 className="header__title">Welcome to React</h1>
                        
                    </div>
                </header>
                {/* end .l-header */}


                {/* begin .l-main */}
                <main className="l-main">

                    <section className="l-container">
                        <p>About</p>
                    </section>



                </main>
                {/* end .l-main */}


                {/* begin .l-footer */}
                <footer className="l-footer">
                    <div className="l-container">
                        <p>Просто футтер</p>
                    </div>
                </footer>
                {/* end .l-footer */}

            </div>
        );
    }
}


export default connect(
    state => ({}),
    dispatch => ({})
)(About);
