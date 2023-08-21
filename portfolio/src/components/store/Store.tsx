
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import CombineReducer from '../reducer/CombinedReducer';
const AppStore = configureStore({
    middleware: [thunk],
    reducer: CombineReducer,

})
export default AppStore
