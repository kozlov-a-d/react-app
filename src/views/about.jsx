import React, { Component } from 'react';
import { connect } from 'react-redux'

import './style.css';


class About extends Component {

    render() {

        return (
            <p>About</p>
        );
    }
}


export default connect(
    state => ({}),
    dispatch => ({})
)(About);
