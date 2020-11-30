const SET_CAMPAGIN_INFO = 'SET_CAMPAGIN_INFO';
const SET_USER_INFO = 'SET_USER_INFO';
const campaginInfo = {
	campagin_uuid: 0, //캠페인 uuid
	user_uuid: 0, //캠페인을 등록한 유저 아이디
	state: '', //캠페인 상태 여부
	title: '', //제목
	sub_title: '', //소제목
	introduction: '', //설명
	participation: '', //참여자List
	start_date: '', //캠페인 시작일
	end_date: '', //종료일
	post_uri: '', //포스터 uri
	campagin_tags: '', //캠페인 태그 리스트
	agree_number: 0, //동의 수
	disagree_number: 0, // 반대 수
	participation_number: 0, //캠페인 참여자 수
	nick_name:[]//등록 닉네임
};

export const setCampaginInfo = (payload) => ({
	type: SET_CAMPAGIN_INFO,
	payload,
});

export const setUserInfo = (payload) => ({
	type: SET_USER_INFO,
	payload,
});

const CampaginInfoReducer = (state = campaginInfo, action) => {
	switch (action.type) {
		case SET_CAMPAGIN_INFO: {
			return {
				...state,
				campagin_uuid: action.payload.campaign_uuid,
				user_uuid: action.payload.user_uuid,
				state: action.payload.state,
				title: action.payload.title,
				sub_title: action.payload.sub_title,
				introduction: action.payload.introduction,
				participation: action.payload.participation,
				start_date: action.payload.start_date,
				end_date: action.payload.end_date,
				post_uri: action.payload.post_uri,
				campagin_tags: action.payload.campagin_tags,
				agree_number: action.payload.agree_number,
				disagree_number: action.payload.disagree_number,
				participation_number: action.payload.participation_number,
			};
		}
		case  SET_USER_INFO: {
			return {
				...state,
				nick_name:action.payload
			};
		}
		default:
			return state;
	}
};
export default CampaginInfoReducer;
