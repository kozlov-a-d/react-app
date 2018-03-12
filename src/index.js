import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route, Link } from 'react-router'; 
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';

import './index.css';
import App from './views/app.jsx';
import About from './views/about.jsx';
import reducers from './reducers';

// import registerServiceWorker from './registerServiceWorker';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(reducers, applyMiddleware(middleware));

store.subscribe(() => {
    console.log('subscribe', store.getState());
});
// store.dispatch(push('/about')); 

ReactDOM.render(
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <div>
            <Route exact path="/" component={App}/>  
            <Route path="/about" component={About}/>
            </div>
            {/* <Link to="/">Home</Link>
            <Link to="/about">Home</Link> */}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();
