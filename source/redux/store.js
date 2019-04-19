import {createStore , applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import reducers from './reducers'
const configureStore = () => {
    const saga = createSagaMiddleware();
    return {
        ...createStore(
            reducers,
            {},
            compose(
                applyMiddleware(
                    saga
                )
            )
        ),
        saga:()=>saga.run(sagas)
    };
};

export default configureStore;


