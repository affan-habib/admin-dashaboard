import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import ApiReducer from './apiSlice';
import { cartReducer } from './cartSlice';
import confirmReducer from './confirmSlice';
import toastReducer from './toastSlice';
import sidebarShowReducer from './sidebarSlice';
import customizationReducer from './customizationReducer';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware(), sagaMiddleware];

export default configureStore({
    reducer: {
        api: ApiReducer,
        cart: cartReducer,
        confirm: confirmReducer,
        toast: toastReducer,
        sidebarShow: sidebarShowReducer,
        customization: customizationReducer
    },
    middleware
});

sagaMiddleware.run(sagas);
