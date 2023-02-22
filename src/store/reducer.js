import { combineReducers } from 'redux';

// reducer import
import ApiReducer from './apiSlice';
import customizationReducer from './customizationReducer';

// ==============================|| COMBINE REDUCER ||============================== //
const reducer = combineReducers({
    customization: customizationReducer,
    api: ApiReducer
});

export default reducer;
