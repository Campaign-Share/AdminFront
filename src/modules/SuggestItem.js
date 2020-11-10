const MODALDATA = 'MODALDATA';

const SuggestItemReducer = {
    onModal : false,
}

export const transformModal = () => ({
    type : MODALDATA
})

const suggestReducer = (state = SuggestItemReducer, action) =>{
    switch(action.type){
        case MODALDATA:{
            return({
                ...state,
                onModal:  !(state.onModal)
            })
        }
        default:{
            return state;
        }
    }
}
export default suggestReducer;