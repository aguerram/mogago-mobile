import {connect} from 'react-redux'
import types from '../../redux/constants'
export const signin = connect(
    state => {
        return{
            login: state.login
        }
    },
    {
        LoginForm:(payload)=>{
            return {
                type:types.login.LOGIN,
                payload
            }
        }
            
    }
)