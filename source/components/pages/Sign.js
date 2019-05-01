import React, {Component} from 'react'
import {View} from 'react-native'
import SignIn from './Signin'
import Signup from './Signup'
import { Router, Scene, Stack } from 'react-native-router-flux'

class Sign extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            login:true
        }
    }
    render() {

        return (
            <Router>
                <Stack key='root' hideNavBar>
                    <Scene key='signin' component={SignIn} initial/>
                    <Scene key='signup' component={Signup}/>
                </Stack>
            </Router>
        );
    }
}

export default Sign