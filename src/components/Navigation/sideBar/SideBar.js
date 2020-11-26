import React, { useCallback } from 'react';
import * as S from './style.js';
import Logo from '../../../assets/Logo.png';
import SideBarList from './siderBarList/SideBarList';
import { useHistory } from 'react-router-dom';
const SideBar = ({num}) => {
	const history = useHistory()
	const gotoLogin = useCallback(()=>{
		history.push('./');
	},[]);
	return (
		<S.SideBox>
			<S.Logo src={Logo} onClick={gotoLogin}></S.Logo>
			<S.MenuBar>
				<SideBarList num={num}></SideBarList>
			</S.MenuBar>
		</S.SideBox>
	);
};

export default SideBar;
