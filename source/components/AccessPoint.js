import React,{Component} from 'react'
import {Dimensions, View} from 'react-native'
import Sign from "./pages/Sign";
import MainRouter from "../router";
import {accesspoint} from '../data/app'
import {SecureStore} from 'expo'
import types from '../redux/constants'
class AccessPoint extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            isLoggedin:false
        }
    }
    componentWillMount() {
        let that = this
        SecureStore.getItemAsync('token')
            .then((it)=>{
                that.props.saveAuth({access_token:it})
            })
    }
    render() {

        return (
            <View>
                <View style={{height: Dimensions.get('window').height}}>
                    {!this.props.auth ?
                        <Sign/> :
                        <MainRouter/>}
                </View>
            </View>
        );
    }
}

export default accesspoint(AccessPoint)