import {LOGIN} from '../constants'
export const LoginForm = (payload)=>{
    return {
        type:LOGIN.LOGIN,
        payload
    }
}