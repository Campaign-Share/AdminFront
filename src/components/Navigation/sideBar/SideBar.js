import React from 'react';
import * as S from './style.js';
import Logo from '../../../assets/Logo.png';
import SideBarList from './siderBarList/SideBarList';
const SideBar = () => {
	return (
		<S.SideBox>
			<S.Logo src={Logo}></S.Logo>
			<S.MenuBar>
				<SideBarList></SideBarList>
			</S.MenuBar>
		</S.SideBox>
	);
};

export default SideBar;
