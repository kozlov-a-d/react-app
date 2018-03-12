import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import notes from './notes';
import notesFilter from './notes.filter';
import pages from './pages';

export default combineReducers({
    routing: routerReducer,
    notes,
    notesFilter,
    pages
})