import React, { Component } from 'react'
import {View,Text} from 'react-native'
import {Button} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<View>
            <Text>Hello this is home</Text>
            <Button title="Click ME" onPress = {()=>{
                Actions.signin()
            }}/>
        </View>);
    }
}
 
export default Home;