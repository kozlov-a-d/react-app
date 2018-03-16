import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class NoteEditor extends Component {

    constructor(props){
        super(props);

        this.state = {
            visibleEditor: true,
            id: {
                label: 'Id',
                value: Date.now(),
                placeholder: '',
                error: ''
            },
            title: {
                label: 'Title',
                value: '',
                placeholder: 'Enter title of note',
                error: ''
            },
            description: {
                label: 'Description',
                value: '',
                placeholder: 'Enter description of note',
                error: ''
            }
        };

        this.defaultData = Object.assign({}, this.state )

    }

    resetData = () => {
        this.setState({ id: this.defaultData.id, title: this.defaultData.title, description: this.defaultData.description});
        this.defaultData.id.value = Date.now();
    };

    handleTitleChange = (event) => {
        let newState = Object.assign({}, this.state.title );
        newState.value = event.target.value;
        this.setState({ title: newState });
    };

    handleDescriptionChange = (event) => {
        let newState = Object.assign({}, this.state.description );
        newState.value = event.target.value;
        this.setState({ description: newState });
    };

    handleClickNoteAdd = () => {
        let isValidForm = true;
        let newState;

        // validate title
        newState = Object.assign({}, this.state.title );
        if ( this.state.title.value === '' ) { 
            newState.error = 'Field should not be empty';
            isValidForm = false; 
        } else {
            newState.error = '';
        }
        this.setState({ title: newState });

       // validate description
        newState = Object.assign({}, this.state.description );
        if ( this.state.description.value === '' ) { 
            newState.error = 'Field should not be empty';
            isValidForm = false; 
        } else {
            newState.error = '';
        }
        this.setState({ description: newState });

        // submit if valid and return tu default data 
        if ( isValidForm ) {
            const newNote = {
                id: this.state.id.value,
                title: this.state.title.value,
                description: this.state.description.value
            };

            // dispatch onAddNote
            this.props.onAddNote(newNote);
            this.resetData();
        }
        
    };


    render() {

        return (
            <div className='note-editor'>
                <div className={'note-editor__form form ' + ( this.state.visibleEditor ? 'is-visible' : 'is-hidden') }>
                    <div className="form__item form-group">
                        <input
                            type='text'
                            className='form-group__input'
                            placeholder={this.state.title.placeholder || ''}
                            value={this.state.title.value || ''}
                            onChange={this.handleTitleChange}
                        />
                        { (this.state.title.error !== '') ? (
                            <ul className="form-group__error">
                                <li>{this.state.title.error}</li>
                            </ul>
                        ) : ( false )}
                    </div>
                    <div className="form__item form-group">
                        <textarea
                            placeholder={this.state.description.placeholder || ''}
                            className='form-group__text'
                            value={this.state.description.value || ''}
                            onChange={this.handleDescriptionChange}
                        />
                        { (this.state.description.error !== '') ? (
                            <ul className="form-group__error">
                                <li>{this.state.description.error}</li>
                            </ul>
                        ) : ( false )}
                    </div>
                    <button className='form__btn btn' onClick={this.handleClickNoteAdd}>Add</button>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({ }),
    dispatch => ({
        onAddNote: (note) => {
            dispatch({ type: 'ADD_NOTE', payload: note })
        }
    })
)(NoteEditor);
