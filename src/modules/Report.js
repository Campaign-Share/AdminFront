const MODALDATA = 'MODALDATA';

const reportReducerState = {
	onModal: false,
};

export const transformModal = () => ({
	type: MODALDATA,
});

const reportReducer = (state = reportReducerState, action) => {
	switch (action.type) {
		case MODALDATA: {
			return ({
				...state,
				onModal: !state.onModal,
			});
		}
		default: {
			return state;
		}
	}
};
export default reportReducer;
