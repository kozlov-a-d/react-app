import React, { Component } from 'react';

import './style.css';

import NoteEditor from '../components/notes/noteEditor';
import NotesGrid from '../components/notes/notesGrid';

class App extends Component {

    constructor(props) {
        super(props);

        let storageState = localStorage.getItem('state');
        let initState;

        if (storageState != null) {
            storageState = JSON.parse(storageState);
            initState = { ...storageState };
        } else {
            initState = {
                notes: []
            };
        }

        this.state = initState;
    }

    componentDidUpdate() {
        localStorage.setItem(
            'state',
            JSON.stringify({ ...this.state }),
        );
    }

    handleNoteAdd = (noteData) => {
        let newNotes = [].concat(this.state.notes);
        newNotes.push(noteData);
        this.setState({ notes: newNotes });
    }

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
                        <NoteEditor onSubmit={this.handleNoteAdd} />
                        <NotesGrid />

                        <table>
                            <tbody>
                                {this.state.notes
                                    .map(({ title, description }, index) => (
                                        <tr key={index}>
                                            <td>{title}</td>
                                            <td>{description}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>

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

export default App;
