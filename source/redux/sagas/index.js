import {takeEvery,all,takeLatest,call} from 'redux-saga/effects'
import types from '../constants'
import {
    httpPost
}from '../actions'
export default function* sagas()
{
    yield all([
        takeEvery(types.api.post,httpPost)
    ])
}
