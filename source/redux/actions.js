import {call, put} from 'redux-saga/effects'
import axios from '../utils/axios'
import types from './constants'
import _ from 'lodash'

function* loader(key, type = 'set') {
    if (key) {
        yield put({
            type: types.loading[type],
            id: key
        })
    }
}

function* actionHandler(rest, response, key = 'then') {
    try {
        let handler = rest[key]
        if (rest.cb) {
            rest.cb(response.data)
        }
        switch (response.status) {
            case 401:
            case 422:
                yield put({
                    type: types.response.set,
                    payload: {
                        id: rest.responseHandler,
                        type: 'error',
                        message: response.data.message,
                        data: response.data
                    }
                });
                break;
            case 200:
                yield put({
                    type: types.response.set,
                    payload: {
                        id: rest.responseHandler,
                        type: 'success',
                        message: response.data.message,
                        data: response.data
                    }
                });
                break;
            case 500:
                yield put({
                    type: types.response.set,
                    payload: {
                        id: rest.responseHandler,
                        type: 'error',
                        message: response.data.message,
                        data: response.data
                    }
                });
                break;
            default:
                console.log(`${response.status} returned wtf ?!!`)
        }

        if (_.isArray(handler)) {
            for (let i = 0; i < handler.length; i++) {
                let hand = handler[i]
                if (_.isObject(hand))
                    yield put(hand)
            }
        } else if (_.isObject(handler)) {
            yield put(handler)
        } else if (_.isString(handler)) {
            yield put(
                {
                    type: handler,
                    payload:response.data
                }
            )
        }
    } catch (e) {
        console.log('Error catching ', e)
    }


}

function* httpCall(config, rest) {
    try {
        yield loader(rest.id)
        yield put({
            type: types.response.unset
        })
        //console.log('Waiting ....')
        let response = yield call(axios, config)
        yield actionHandler(rest, response)
        //console.log(response.data)
    } catch (error) {
        yield actionHandler(rest, error.response, 'catch');
    } finally {
        //console.log('Finished ....')
        yield loader(rest.id, 'unset')
    }
}

export function* httpPost({request, ...rest}) {
    yield call(httpCall, {...request, method: 'post'}, rest)
}
