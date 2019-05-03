import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './Route/Route.jsx';
import {Provider}  from 'react-redux';
import HomeReducer from './Reducer/HomeReducer.jsx'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise';
import createSagaMiddleware from 'redux-saga'
import * as serviceWorker from './serviceWorker';
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()



const store = createStore(HomeReducer,
    {count: 0},
    applyMiddleware(thunk,promise,sagaMiddleware)
)

    sagaMiddleware.run(mySaga)
// const configureStore = applyMiddleware(thunk)(createStore)
// const store = configureStore(HomeReducer)

ReactDOM.render(<Provider store ={store} ><Route /></Provider>, document.getElementById('root'));

//// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
