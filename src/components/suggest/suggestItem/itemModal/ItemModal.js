import React from 'react';
import * as S from './style';
import PosterBox from './posterBox/PosterBox';
import DiscritionBox from './discriptionBox/DiscriptionBox';
const ItemModal = () => {
	
	return (
		<S.ModalBody>
			<PosterBox></PosterBox>
			<DiscritionBox />
		</S.ModalBody>
	);
};
export default ItemModal;
