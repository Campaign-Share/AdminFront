import React from 'react';
import * as S from './style.js';
import SideBar from '../../Navigation/sideBar/SideBar';
import CampaginInfo from './campaginInfo/CampaginInfo';
import List from './list/List';
import {useDispatch,useSelector} from 'react-redux';
import {transformModal} from '../../../modules/CertifyReducer';
const CertifyDetail = () => {
	const dispatch = useDispatch();
	const onModal = () => {
		dispatch(transformModal());
		console.log('asd')
    }
	const {certifyOnModal} = useSelector(store => store.CertifyReducer)
	return (
		<S.Container>
			{certifyOnModal && <S.ModalBackground onClick={onModal}/>}
			<SideBar num={2} />
			<S.DetailContainer>
				<S.Box>
					<CampaginInfo />
					<S.Line />
                    <List certifyOnModal={certifyOnModal} onModal={onModal}/>
				</S.Box>
			</S.DetailContainer>
		</S.Container>
	);
};
export default CertifyDetail;
