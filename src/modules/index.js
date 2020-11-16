import {combineReducers} from 'redux';
import suggestReducer from './SuggestItemReducer';
import reportReducer from './ReportReducer';
import CertifyReducer from './CertifyReducer';
import CampaginInfoReducer from './CampaginInfoReducer';
const rootReducer = combineReducers({
    suggestReducer, 
    reportReducer,
    CertifyReducer,
    CampaginInfoReducer
})

export default rootReducer;