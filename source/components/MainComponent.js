import React, {Component} from 'react'
import {Text, View, Dimensions} from 'react-native'
import MainRouter from '../router/'
import SignIn from './pages/Signin'
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
                        <SignIn/> :
                        <MainRouter />}
                </View>
            </Provider>);
    }
}

export default Main;
