import types from '../constants'
import {SecureStore} from 'expo'
export const reducer = (state = null,action)=>{
    switch(action.type)
    {
        case types.auth.success:
            SecureStore.setItemAsync('token',action.payload.access_token)
            return {
                ...state,
                token:action.payload.access_token
            }
        default : return state
    }
}