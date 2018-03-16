import React, { Component } from 'react';
import { connect } from 'react-redux';

import { asyncGetNotes } from '../../actions/notes';
import './style.css';

class NoteGrid extends Component {

    handleFindNote() {
        this.props.onFindNote(this.searchInput.value);
    };

    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default connect(
    state => ({
        notes: state.notes.filter(note => note.title.includes(state.notesFilter))
    }),
    dispatch => ({
         onFindNote: (name) => {
             dispatch({ type: 'FIND_NOTE', payload: name })
         },
         onGetNotes: () => {
             dispatch(asyncGetNotes());
         }
    })
)(NoteGrid);