import types from '../constants'
export const reducer = (state = {},action)=>
{
    switch(action.type)
    {
        case types.loading.set:
            return{
                ...state,
                [action.id]:true
            }
        case types.loading.unset:
            let {[action.id]:value ,...rest} = state
            return {}
        default: return state;
    }
}