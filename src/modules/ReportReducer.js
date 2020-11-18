const REPORTMODALDATA = 'REPORTMODALDATA';
const GETREPORTLIST = 'GETREPORTLIST';
const reportReducerState = {
	reportOnModal: false,
	reportList : []
};

export const transformModal = () => ({
	type: REPORTMODALDATA,
});

export const getReportList = (payload) => ({
	type:GETREPORTLIST,
	payload
})

const reportReducer = (state = reportReducerState, action) => {
	switch (action.type) {
		case REPORTMODALDATA: {
			return {
				...state,
				reportOnModal: !state.reportOnModal,
			};
		}
		case GETREPORTLIST :{
			return{
				...state,
				reportList:action.payload
			}
		}
		default: {
			return state;
		}
	}
};
export default reportReducer;
