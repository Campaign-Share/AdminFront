import {combineReducers} from 'redux';
import suggestReducer from './SuggestItem';
const rootReducer = combineReducers({
    suggestReducer, 
})

export default rootReducer;