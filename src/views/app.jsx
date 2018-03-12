import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

import { asyncGetNotes } from '../actions/notes';

import NoteEditor from '../components/notes/noteEditor';
import NotesGrid from '../components/notes/notesGrid';


class App extends Component {

    constructor(props) {
        super(props);
    };

    componentDidUpdate() { }

    handleNoteAdd = (noteData) => {
        this.props.onAddNote(noteData);
    };

    handleFindNote() {
        // console.log('findTrack', this.searchInput.value);
        this.props.onFindNote(this.searchInput.value);
    };

    render() {

        return (

            <div className="l-wrapper">

                {/* begin .l-header */}
                <header className="l-header header">
                    <div className="l-container">
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        <h1 className="header__title">Welcome to React</h1>
                        Links:
                        {' '}
                        <Link to="/">Home</Link>
                        {' '}
                        <Link to="/edit">edit</Link>
                        {' '}
                        <Link to="/about">about</Link>
                    </div>
                </header>
                {/* end .l-header */}


                {/* begin .l-main */}
                <main className="l-main">

                    <section className="l-container">
                        <NoteEditor onSubmit={this.handleNoteAdd} />
                        <NotesGrid />
                        <div className="form">
                            <div className="form__item form-group">
                                <input 
                                    type="text" 
                                    ref={(input) => { this.searchInput = input }} 
                                    className="form-group__input"
                                    placeholder="Search" />
                            </div>
                            <button onClick={this.handleFindNote.bind(this)} className="btn">Search</button>
                        </div>
                        <table>
                            <tbody>
                                {this.props.notes.map((note, index) => (
                                    <tr key={index}>
                                        <td>{note.title}</td>
                                        <td>{note.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <button onClick={this.props.onGetNotes} className="btn">Test API</button>

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

// export default App;
export default connect(
    state => ({
        notes: state.notes.filter(note => note.title.includes(state.notesFilter))
    }),
    dispatch => ({
        onAddNote: (note) => {
            dispatch({ type: 'ADD_NOTE', payload: note })
        },
        onFindNote: (name) => {
            dispatch({ type: 'FIND_NOTE', payload: name })
        },
        onGetNotes: () => {
            dispatch(asyncGetNotes());
        }
    })
)(App);
