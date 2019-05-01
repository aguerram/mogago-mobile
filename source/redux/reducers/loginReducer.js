import types from '../constants'
export function reducer(state = {email: '', password: '',rememberMe:false}, {type,payload}) {
    switch (type) {
        case types.login.LOGIN:
            return {
                ...state,
                email:payload.email?payload.email:state.email,
                password:payload.password?payload.password:state.password,
                rememberMe:payload.rememberMe?payload.rememberMe:state.rememberMe
            };
        default:
            return state;
    }
}
