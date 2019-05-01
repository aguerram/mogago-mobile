const types = {
    api:{
        post:'api:post',
        get:'api:get',
        delete:'api:delete',
        put:'api:put'
    },
    login: {
        LOGIN: 'login:login-send',
        LOGIN_SUCCESS: 'login:login-success',
        LOGIN_FAILED: 'login:login-failed'
    },
    response:{
        success:'response:success-res',
        error:'response:error-res',
        warning:'response:warning-res'
    },
    loading:{
        set:'loading:set',
        unset:'loading:unset'
    }
};
export default types