import React, {Component} from 'react'
import {Text, View, Dimensions} from 'react-native'
import MainRouter from '../router/'
import Sign from './pages/Sign'
import {Provider} from 'react-redux'
import storeConfigure from '../redux/store'

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
                <View style={{height: Dimensions.get('window').height}}>
                    {!this.state.isLoggedin ?
                        <Sign/> :
                        <MainRouter />}
                </View>
            </Provider>);
    }
}

export default Main;
