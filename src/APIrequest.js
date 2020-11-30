import axios from 'axios';

const BASE_URL = 'http://52.79.186.241';

export const requestApi = async (url, body, header, method) => {
	try {
		const res = await axios({
			url: BASE_URL + url,
			data: body,
			headers: header,
			method,
		});
		return res;
	} catch (err) {
		if (err.response) {
			throw err.response.status;
		}
		alert('네트워크 연결을 확인해 주세요');
		throw null;
	}
};
export const requestApiWithAccessToken = async (url, body, header, method) => {
	try {
		const accessToken = localStorage.getItem('access_token');
		const res = await requestApi(
			url,
			body,
			{
				Authorization: accessToken,
				...header,
			},
			method,
		);
		return res;
	} catch (errStatus) {
		throw errStatus;
	}
};
