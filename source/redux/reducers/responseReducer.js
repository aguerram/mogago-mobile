import types from '../constants'
export const reducer = (state = {},action)=>{
    switch(action.type)
    {
        case types.response.success:
            return {
                ...state,
                [action.payload.id]:{
                    type:'success',
                    message:action.payload.message
                }
            }
        case types.response.error:
            return {
                ...state,
                [action.payload.id]:{
                    type:'error',
                    message:action.payload.message
                }
            }
        case types.response.warning:
            return {
                ...state,
                [action.payload.id]:{
                    type:'warning',
                    message:action.payload.message
                }
            }
        default: return state;
    }
}