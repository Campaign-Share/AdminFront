import React, { useEffect } from 'react';
import Certify from '../../components/certify/Certify';
import axios from 'axios';
import { requestApiWithAccessToken } from '../../APIrequest';
import { useDispatch, useSelector } from 'react-redux';
import { transformModal,getCampaginList } from '../../modules/CertifyReducer';
const CertifyContainer = () => {
	return <Certify list={useSelector(store=>store.CertifyReducer.list)}/>;
};
export default CertifyContainer;
