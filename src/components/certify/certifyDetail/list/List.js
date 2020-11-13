import React from 'react';
import * as S from './style';
import Modal from '../modal/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {transformModal} from '../../../../modules/Certify';
const List = ({certifyOnModal, onModal}) => {

	return (
		<S.Container>
			
			{certifyOnModal && <Modal/>}
			<S.ItemBox onClick={onModal}>
				<S.Name>김해린</S.Name>
				<S.ViewDiscription>설명??????</S.ViewDiscription>
				<S.File>첨부파일</S.File>
			</S.ItemBox>
		</S.Container>
	);
};
export default List;
