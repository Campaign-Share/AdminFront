import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

const Login = () => {
	const history = useHistory();
	const clickLogin = ()=>{
		console.log('확인')
		history.push('/suggest')
	}
	return (
		<S.Background>
			<S.LoginBox>
				<S.Title>관리자 로그인</S.Title>
				<S.InputBox>
					<S.Input placeholder="ID" />
					<S.Input placeholder="Password" />
				</S.InputBox>
				<S.Button onClick={clickLogin}>로그인</S.Button>
			</S.LoginBox>
		</S.Background>
	);
};
export default Login;
