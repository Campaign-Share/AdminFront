import {combineReducers} from 'redux';
import suggestReducer from './SuggestItem';
import reportReducer from './Report';
const rootReducer = combineReducers({
    suggestReducer, 
    reportReducer
})

export default rootReducer;