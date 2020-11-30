const SUGGESTMODALDATA = 'SUGGESTMODALDATA';
const SET_CAMPAGIN_LIST = 'SET_CAMPAGIN_LIST';

const SuggestItemReducer = {
	suggestOnModal: false,
	list: [],
	info: '',
};

export const transformModal = (payload) => ({
	type: SUGGESTMODALDATA,
	payload,
});

export const setList = (payload) => ({
	type: SET_CAMPAGIN_LIST,
	payload,
});

const suggestReducer = (state = SuggestItemReducer, action) => {
	switch (action.type) {
		case SUGGESTMODALDATA: {
			return {
				...state,
				suggestOnModal: !state.suggestOnModal,
				info: action.payload,
			};
		}
		case SET_CAMPAGIN_LIST: {
			return {
				...state,
				list: action.payload.start ? state.list.concat(action.payload.listArr) : [],
				// list:action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
export default suggestReducer;
