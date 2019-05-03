import React, {Component} from 'react'
import {StyleSheet, View, Dimensions, KeyboardAvoidingView} from 'react-native';
import {Button, Input, CheckBox,Text} from 'react-native-elements'
import {ToastAndroid} from 'react-native';
import style from '../styles/'
import Icon from '@expo/vector-icons/Feather'
import {connect} from 'react-redux'
import {signin} from '../../data/app'
import {request_id, loading_id} from '../../config/id'
import {Alert} from '../../data/form'
import {Actions} from 'react-native-router-flux'
let deviceWidth = Dimensions.get('window').width
import colors from '../../config/color'

import {getResponse} from '../../utils/getResponse'

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            checked: false
        }
        this.emailInputChange = this.emailInputChange.bind(this);
        this.passwordInputChange = this.passwordInputChange.bind(this);
        this.rememberMeChange = this.rememberMeChange.bind(this);

    }

    emailInputChange(val) {
        this.props.LoginForm({
            email: val,
            password: this.props.login.password
        })
    }

    passwordInputChange(val) {
        this.props.LoginForm({
            password: val,
            email: this.props.login.email
        })
    }

    rememberMeChange() {
        this.setState({
            checked:!this.state.checked
        })
    }


    render() {
        let state = this.state;
        return (<KeyboardAvoidingView style={style.container} behavior="padding" enabled>
            <Text h2>Login</Text>
            <Alert id={request_id.login}/>
            <Input
                placeholder='Email'
                leftIcon={{type: 'feather', name: 'user'}}
                leftIconContainerStyle={{
                    paddingRight: 10
                }}
                shake
                style={{
                    fontSize: 14
                }}
                errorMessage={getResponse(this.props.response, request_id.login, "email")}
                textContentType='emailAddress'
                value={this.props.login.email}
                name="username"
                onChangeText={(val) => this.emailInputChange(val)}
            />
            <Input
                placeholder='Password'
                leftIcon={{type: 'feather', name: 'lock'}}
                leftIconContainerStyle={{
                    paddingRight: 10
                }}
                secureTextEntry
                textContentType='password'
                errorMessage={getResponse(this.props.response, request_id.login, "password")}
                onChangeText={(val) => this.passwordInputChange(val)}
                value={this.props.login.password}
                name="password"
            />
            <View style={{width: deviceWidth}}>
                <View style={{position: 'absolute', left: 0}}>
                    <CheckBox
                        title="Remembre me"
                        checked={this.state.checked}
                        onPress={this.rememberMeChange}
                    />
                    <Button
                        style={{color: colors.link, marginLeft: 10, marginTop: 15}}
                        title="Don't have account ?"
                        type="clear"
                        onPress={()=>Actions.signup()}
                    />
                </View>
                <View style={{
                    width: 100,
                    position: 'absolute',
                    right: 10,
                    top: 5
                }}>
                    <Button
                        loading={this.props.loading[loading_id.button + 'login']}
                        icon={
                            <Icon
                                name="log-in"
                                color="white"
                                size={19}
                            />
                        }
                        onPress={() => {
                            this.props.LoginSubmit({...this.props.login,rememberMe:this.state.checked})
                        }} title=" Login"/>

                </View>

            </View>

        </KeyboardAvoidingView>);
    }
}

export default signin(Signin);