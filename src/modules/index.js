import {combineReducers} from 'redux';
import suggestReducer from './SuggestItem';
import reportReducer from './Report';
import CertifyReducer from './Certify';
const rootReducer = combineReducers({
    suggestReducer, 
    reportReducer,
    CertifyReducer
})

export default rootReducer;