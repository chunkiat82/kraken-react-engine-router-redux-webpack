import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

export default function configureStore(initialState) {

  let createStoreWithMiddleware;
  if (__DEVELOPMENT__) {
    const { devTools } = require('redux-devtools');
    createStoreWithMiddleware = compose(
      applyMiddleware(thunk), // any Redux middleware, e.g. redux-thunk
      devTools()
    )(createStore);

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers');
        store.replaceReducer(nextReducer);
      });
    }
  } else {
    createStoreWithMiddleware = applyMiddleware(...middleware)(_createStore);
  }

  const store = createStoreWithMiddleware(reducer, initialState);

  return store;
}
