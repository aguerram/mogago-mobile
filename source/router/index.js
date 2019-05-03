import React, { Component } from 'react'
import { Text ,View} from 'react-native'
import { Router, Scene, Stack, Drawer } from 'react-native-router-flux'

import Icon from '@expo/vector-icons/Feather';
import Home from '../components/pages/Home'
import {Button} from "react-native-elements";

const TabbarIcon = ({ selected, title }) => {
    let t = title.toLocaleLowerCase()
    let icon = '';
    let color = selected?'#34495e':'#bdc3c7'
    switch(t)
    {
        case 'main':icon=<Icon name="home" size={32} color={color} />;break;
        default : icon = <Text>{title}</Text>
    }
    return (
        icon
    )
}
class Drawer extends Component{
    render()
    {
        return <View>
            <Button title='Click me'/>
        </View>
    }
}
class MainRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<Router>
            <Stack key="root">
                <Drawer component={Drawer} />
                <Scene hideNavBar key="tabbar" tabs tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
                    <Scene key="main" title="Main" icon={TabbarIcon}>
                        <Scene key="home" title="Home" component={Home} initial />
                    </Scene>
                </Scene>
            </Stack>
        </Router>);
    }
}

export default MainRouter;
