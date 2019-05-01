import types from '../constants'
export const reducer = (state = {},action)=>{
    switch(action.type)
    {
        case types.response.set:
            return {
                ...state,
                [action.payload.id]:{
                    type:action.payload.type,
                    message:action.payload.message,
                    data:action.payload.data
                }
            }
        case types.response.unset:
            return {}
        default: return state;
    }
}
function resp(state,type)
{

}