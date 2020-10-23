import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import logger from 'redux-logger'

const initState = {}
const middleware = [thunk]

// use logger only on development server
process.env.NODE_ENV === `development` ? middleware.push(logger) : middleware.push()


const store = createStore(
    rootReducer,
    initState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store