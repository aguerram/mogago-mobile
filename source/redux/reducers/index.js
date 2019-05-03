import {combineReducers} from 'redux'
let reducers = {}
let hocs = {
    login:require('./loginReducer'),
    response:require('./responseReducer'),
    loading:require('./loadingReducer'),
    auth:require('./authReducer')
};
for(var e in hocs){
    reducers[e] = hocs[e].reducer;
}

export default combineReducers(reducers);