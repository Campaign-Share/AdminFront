import React from 'react';
import ReportModal from '../reportModal/ReportModal';
import * as S from './style';
import {useSelector } from 'react-redux';
const ReportList = ({modalOn, element}) => {
	const {reportOnModal} = useSelector((store) => store.reportReducer);
	console.log(element.target_uuid);
	return (
        <>
		{reportOnModal && <ReportModal/>}
		<S.Item onClick={modalOn}>
			<S.Element>GO CRUELTY FREE: LET US BE!</S.Element>
			<S.Element>김해린</S.Element>
			<S.Element>광고성 캠페인</S.Element>
			<S.Element>광고 목적으로 올린 것 같아요!</S.Element>
		</S.Item>
        </>
	);
};
export default ReportList;
