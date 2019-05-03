import types from '../constants'
export function reducer(state = {email: '', password: '',rememberMe:false}, {type,payload}) {
    switch (type) {
        case types.login.LOGIN:
            return {
                ...state,
                email:payload.email,
                password:payload.password
            };
        default:
            return state;
    }
}
