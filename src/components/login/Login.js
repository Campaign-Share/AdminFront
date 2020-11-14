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
	const clickLogin = useCallback(() => {
	
		requestApi(
			'/v1/login/admin',
			{ admin_id: id, admin_pw: password },
			{},
			'post',
		).then((res) => {
			if (res.status === 200) {
				localStorage.setItem('admin_uuid', res.data.admin_uuid);
				localStorage.setItem('access_token', res.data.access_token);
				history.push('/suggest');
			} else if (res.status === 409) {
				alert('존재하지 않는 관리자 ID입니다.');//나중에 throw처리
			} else {
				console.log(res.status);
			}
		});
	}, [id, password]);
	return (
		<S.Background>
			<S.LoginBox>
				<S.Title>관리자 로그인</S.Title>
				<S.InputBox>
					<S.Input placeholder="ID" onChange={idOnChange} />
					<S.Input placeholder="Password" onChange={passwordOnChange} />
				</S.InputBox>
				<S.Button onClick={clickLogin}>로그인</S.Button>
			</S.LoginBox>
		</S.Background>
	);
};
export default Login;
