import { createStore } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware(), sagaMiddleware];
// ==============================|| REDUX - MAIN STORE ||============================== //

const store = configureStore({ reducer, middleware });
const persister = 'Free';

export { store, persister };
