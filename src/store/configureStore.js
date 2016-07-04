/* global __DEVELOPMENT__:true */
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {

    let createStoreWithMiddleware;
    if (__DEVELOPMENT__) {
        createStoreWithMiddleware = compose(
            applyMiddleware(thunk), // any Redux middleware, e.g. redux-thunk
            DevTools.instrument()
        )(createStore);

        if (module.hot) {
            // Enable Webpack hot module replacement for reducers
            module.hot.accept('../reducers', () => {
                const nextReducer = require('../reducers').default;
                store.replaceReducer(nextReducer);
            });
        }
    } else {
        createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    }

    const store = createStoreWithMiddleware(reducer, initialState);

    return store;
}
