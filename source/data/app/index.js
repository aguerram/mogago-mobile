import {connect} from 'react-redux'
import types from '../../redux/constants'
import config from '../../config/config'
import store from '../../redux/store'
import {loading_id} from "../../config/id";

export const signin = connect(
    state => {
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
                responseHandler:'alabasta',
                request:{
                    url:'/game',
                    data:{
                        email:login.email,
                        password:login.password,
                        rememberMe:login.rememberMe
                    }
                }
            }
        }
            
    }
)