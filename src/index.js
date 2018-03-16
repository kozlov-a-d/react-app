import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // кастомный миддлвар для асинхронных экшенов

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import { composeWithDevTools } from 'redux-devtools-extension';  // дебаг через redux-devtools для хрома
// import registerServiceWorker from './registerServiceWorker';  // если вдруг понадобятся сервис-воркеры

import './index.css';
import App from './views/app.jsx';
import reducers from './reducers';


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

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
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();
