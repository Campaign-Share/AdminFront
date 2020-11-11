import React from 'react';
import * as S from './style';
import SideBar from '../Navigation/sideBar/SideBar';
import {useSelector} from 'react-redux';
import ReportList from './reportList/ReportList';
import ReportModal from './reportModal/ReportModal'
const Report = ({modalOn}) => {
	const {onModal} = useSelector((store) => store.reportReducer);
	return (
		<S.Container>
			{onModal && <S.ModalBackground onClick={modalOn}/>}
			<SideBar num={1}></SideBar>
			<S.ReportContainer>
				<S.MarginContainer>
					<S.TitleNav>
						<S.Element>캠페인 제목</S.Element>
						<S.Element>신고자</S.Element>
						<S.Element>분야</S.Element>
						<S.Element>사유</S.Element>
					</S.TitleNav>
					<ReportList modalOn = {modalOn}/>
				</S.MarginContainer>
			</S.ReportContainer>
			
		</S.Container>
	);
};
export default Report;
