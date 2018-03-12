import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // кастомный миддлвар для асинхронных экшенов

import createHistory from 'history/createBrowserHistory';
import { Router, Route, browserHistory } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import { composeWithDevTools } from 'redux-devtools-extension';  // дебаг через redux-devtools для хрома
// import registerServiceWorker from './registerServiceWorker';  // если вдруг понадобятся сервис-воркеры

import './index.css';
import App from './views/app.jsx';
import About from './views/about.jsx';
import reducers from './reducers';
import NoteGrid from "./components/notes/notesGrid";
import NoteEditor from "./components/notes/noteEditor";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// const reducer = combineReducers({
//     ...reducers,
//     routing: routerReducer
// });
// Also apply our middleware for navigating
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    console.log('subscribe', store.getState());
});
// store.dispatch(push('/about')); 

ReactDOM.render(
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <Route path="/" component={App}>
                <Route path=""  component={NoteGrid}/>
                <Route path="edit" component={NoteEditor}/>
                <Route path="about" component={About}/>
            </Route>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();
