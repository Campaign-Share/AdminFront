const SUGGESTMODALDATA = 'SUGGESTMODALDATA';
const SET_CAMPAGIN_LIST = 'SET_CAMPAGIN_LIST';

const SuggestItemReducer = {
	suggestOnModal: false,
	list: [],
};

export const transformModal = () => ({
	type: SUGGESTMODALDATA,
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
			};
		}
		case SET_CAMPAGIN_LIST: {
			return ({
				...state,
				list: action.payload,
			});
		}
		default: {
			return state;
		}
	}
};
export default suggestReducer;
