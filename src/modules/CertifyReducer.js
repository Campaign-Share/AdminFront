const CERIFYMODALDATA = 'CERIFYMODALDATA';
const GETCAMPAGINLIST = 'GETCAMPAGINLIST';
const GETCERTIFYPERSON = 'GETCERTIFYPERSON';
const GETCERTIFYCAMPAGIN = 'certify/GETCERTIFYCAMPAGIN';
const GETCERTIFYLIST = 'certify/GETCERTIFYLIST';
const certifyState = {
	certifyOnModal: false,
	list: [],
	nick_name: [],
	campagin:{},
	certifyList : [],
	modalData:{}
};

export const transformModal = (payload) => ({
	type: CERIFYMODALDATA,
	payload
});

export const getCampaginList = (payload) => ({
	type: GETCAMPAGINLIST,
	payload,
});
export const getCertifyPerson = (payload) => ({
	type: GETCERTIFYPERSON,
	payload,
});

export const getCertifyCampagin = (payload) => ({
	type:GETCERTIFYCAMPAGIN,
	payload,
})
export const getCertifylist =(payload) => ({
	type: GETCERTIFYLIST,
	payload,
})
const CertifyReducer = (state = certifyState, action) => {
	switch (action.type) {
		case CERIFYMODALDATA:
			return {
				...state,
				certifyOnModal: !state.certifyOnModal,
				modalData:action.payload
			};
		case GETCAMPAGINLIST:
			return {
				...state,
				list: state.list.concat(action.payload),
				list: action.payload.start ? state.list.concat(action.payload.listArr) : []
			};
		case GETCERTIFYPERSON:
			return {
				...state,
				nick_name: action.payload,
			};
		case GETCERTIFYCAMPAGIN:
			return{
				...state,
				campagin:action.payload
			};
		case GETCERTIFYLIST:
			return{
				...state,
				certifyList:action.payload
			}
		default:
			return state;
	}
};

export default CertifyReducer;
