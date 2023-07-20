import postReducers from "./reducers/postReducers";
import selPostReducer from "./reducers/selPostReducer";

import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

let rootReducers=combineReducers({
    postDataObj:postReducers,
    selPostObj:selPostReducer,
})

let store = createStore(rootReducers,applyMiddleware(thunk));
export default store