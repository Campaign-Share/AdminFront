const SUGGESTMODALDATA = 'SUGGESTMODALDATA';

const SuggestItemReducer = {
    suggestOnModal : false,
}

export const transformModal = () => ({
    type : SUGGESTMODALDATA
})

const suggestReducer = (state = SuggestItemReducer, action) =>{
    switch(action.type){
        case SUGGESTMODALDATA:{
            return({
                ...state,
                suggestOnModal:  !(state.suggestOnModal)
            })
        }
        default:{
            return state;
        }
    }
}
export default suggestReducer;