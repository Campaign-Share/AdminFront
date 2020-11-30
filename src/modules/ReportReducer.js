const REPORTMODALDATA = 'REPORTMODALDATA';
const GETREPORTLIST = 'GETREPORTLIST';
const reportReducerState = {
	reportOnModal: false,
	reportModalData: {},	
	reportList:[]
};

export const transReportformModal = (payload) => ({
	type: REPORTMODALDATA,
	payload
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
				reportModalData : action.payload
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
