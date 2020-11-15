import React from 'react';
import Report from '../../components/report/Report';
import {transformModal} from '../../modules/Report';
import {useDispatch }from 'react-redux';
const ReportContainer = () => {
    const dispatch = useDispatch();
    const modalOn = () => {
        dispatch(transformModal());
    }
    return(
        <Report modalOn={modalOn}/>
    )
};
export default ReportContainer;