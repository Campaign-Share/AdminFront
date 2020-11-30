import React, { useCallback, useEffect, useState } from 'react';
import Suggest from '../../components/suggest/Suggest';
import { useSelector, useDispatch } from 'react-redux';
import { setList } from '../../modules/SuggestItemReducer';
import axios from 'axios';

const SuggestContainer = () => {

	const { list } = useSelector((store) => store.suggestReducer);
	return <Suggest list={list}></Suggest>;
};
export default SuggestContainer;
