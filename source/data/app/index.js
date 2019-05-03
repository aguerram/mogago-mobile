import {connect} from 'react-redux'
import types from '../../redux/constants'
import config from '../../config/config'
import store from '../../redux/store'
import {request_id,loading_id} from "../../config/id";

export const accesspoint = connect(
    (state)=>{
        return {
            auth:state.auth
        }
    }
    ,{
        saveAuth:(payload)=>{
            return {
                type:types.auth.success,
                payload
            }
        }
    }
)
export const signup = connect(
    (state)=> {
        return{
            login: state.login,
            response:state.response,
            loading:state.loading
        }
    },
    {
        LoginForm:(payload)=>{
            return {
                type:types.login.LOGIN,
                payload
            }
        },
        SignupForm:(payload)=>{
            return{
                type:types.api.post,
                responseHandler:request_id.signup,
                id:loading_id.button+'signup',
                request:{
                    url:'/signup',
                    data:{
                        name:payload.name,
                        email:payload.email,
                        password:payload.password,
                        password_confirmation:payload.password_confirmation
                    }
                }
            }
        }
    }
)
export const signin = connect(
    (state,props) => {
        return{
            login: state.login,
            response:state.response,
            loading:state.loading
        }
    },
    {
        LoginForm:(payload)=>{
            return {
                type:types.login.LOGIN,
                payload
            }
        },
        LoginSubmit:(login)=>{
            return {
                type:types.api.post,
                id:loading_id.button+'login',
                responseHandler:request_id.login,
                request:{
                    url:'/login',
                    data:{
                        email:login.email,
                        password:login.password,
                        rememberMe:login.rememberMe
                    },

                },
                then:types.auth.success
            }
        }
            
    }
)