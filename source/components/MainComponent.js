import React, {Component} from 'react'
import {Provider} from 'react-redux'
import storeConfigure from '../redux/store'
import AccessPoint from "./AccessPoint";

let store = storeConfigure();
store.saga()

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin: false
        }
    }

    render() {
        return (
            <Provider store={store}>
                <AccessPoint/>
            </Provider>);
    }
}

export default Main;
