import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducers';

export default function configureStore(initialState) {
    // Add support for redux devtools
    const composeEnhancers = Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}