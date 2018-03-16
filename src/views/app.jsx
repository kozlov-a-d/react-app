import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';


import Header from './_header';
import Footer from './_footer';

import About from './about.jsx';
import NoteEditor from '../components/notes/noteEditor';
import NotesGrid from '../components/notes/notesGrid';


export default class App extends Component {

    render() {

        return (
            <div className="l-wrapper">
                <Header />

                <main className="l-main">
                    <section className="l-container">
                        <Switch>
                            <Route exact path="/" component={NotesGrid} />
                            <Route path="/edit" component={NoteEditor} />
                            <Route path="/about" component={About} />
                        </Switch>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }
}
