const REPORTMODALDATA = 'REPORTMODALDATA';

const reportReducerState = {
	reportOnModal: false,
};

export const transformModal = () => ({
	type: REPORTMODALDATA,
});

const reportReducer = (state = reportReducerState, action) => {
	switch (action.type) {
		case REPORTMODALDATA: {
			return {
				...state,
				reportOnModal: !state.reportOnModal,
			};
		}
		default: {
			return state;
		}
	}
};
export default reportReducer;
