import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { requestApi } from '../../APIrequest';
import * as S from './style';

const Login = () => {
	const history = useHistory();
	const [id, changeId] = useState('');
	const [password, changePassword] = useState('');
	const idOnChange = useCallback((e) => {
		changeId(e.target.value);
	});
	const passwordOnChange = useCallback((e) => {
		changePassword(e.target.value);
	}, []);
	const loginPress = useCallback((e)=>{
		console.log(e);
		if(e.keyCode === 13){
			console.log('asd	')
			clickLogin();
		}
	},[id, password])
	const clickLogin = useCallback(async () => {
		try{
			const res = await requestApi(
				'/v1/login/admin',
				{ admin_id: id, admin_pw: password },
				{},
				'post',
			);
			if (res.status === 200) {
				localStorage.setItem('admin_uuid', res.data.admin_uuid);
				localStorage.setItem('access_token', `Bearer ${res.data.access_token}`);
				history.push('/suggest');
			}
			else console.log(res);
		}
		catch(err){
			if(err === 409){
				alert('존재하지 않는 관리자 id입니다.')
			}
			else if(err === 400){
				alert('입력값이 없습니다.')
			}
		}
	}, [id, password]);

	return (
		<S.Background>
			<S.LoginBox>
				<S.Title>관리자 로그인</S.Title>
				<S.InputBox>
					<S.Input placeholder="ID" onChange={idOnChange} />
					<S.Input placeholder="Password" onChange={passwordOnChange} onKeyDown={loginPress}/>
				</S.InputBox>
				<S.Button onClick={clickLogin}>로그인</S.Button>
			</S.LoginBox>
		</S.Background>
	);
};
export default Login;
