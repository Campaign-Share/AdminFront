import React from 'react';
import * as S from './style';
import Modal from '../modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { transformModal } from '../../../../modules/CertifyReducer';
const List = ({ certifyOnModal, onModal,ele }) => {
	return (
		<>
			{certifyOnModal && <Modal />}
			<S.ItemBox onClick={()=>{onModal(ele)}}>
				<S.Name>{ele.user_name}</S.Name>
				<S.ViewDiscription>{ele.introduction}</S.ViewDiscription>
			</S.ItemBox>
		</>
	);
};
export default List;
