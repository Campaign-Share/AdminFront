const CERIFYMODALDATA = 'CERIFYMODALDATA';

const certifyState = {
	certifyOnModal: false,
};

export const transformModal = () => ({
	type: CERIFYMODALDATA,
});

const CertifyReducer = (state = certifyState, action) => {
	switch (action.type) {
		case CERIFYMODALDATA:
			return ({
				...state,
				certifyOnModal: !state.certifyOnModal,
			});
		default:
			return state;
	}
};

export default CertifyReducer;
