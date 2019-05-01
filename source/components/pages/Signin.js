import React, {Component} from 'react'
import {StyleSheet, Text, View, Dimensions, KeyboardAvoidingView} from 'react-native';
import {Button, Input, CheckBox} from 'react-native-elements'
import {ToastAndroid} from 'react-native';
import style from '../styles/'
import Icon from '@expo/vector-icons/Feather'
import {connect} from 'react-redux'
import {signin} from '../../data/app'
let deviceWidth = Dimensions.get('window').width

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
        this.props.LoginForm({
            rememberMe: !this.props.login.rememberMe
        })
    }

    render() {
        let state = this.state;
        return (<KeyboardAvoidingView style={style.container} behavior="padding" enabled>
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

                textContentType='emailAddress'
                value={this.props.login.username}
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
                errorMessage=""
                onChangeText={(val) => this.passwordInputChange(val)}

                value={this.props.login.password}
                name="password"
            />
            <View style={{width: deviceWidth}}>
                <View style={{position: 'absolute', left: 0}}>
                    <CheckBox
                        title="Remembre me"
                        checked={this.props.login.rememberMe}
                        onPress={this.rememberMeChange}
                    />
                </View>
                <View style={{
                    width: 100,
                    position: 'absolute',
                    right: 10,
                    top: 5
                }}>
                    <Button
                        loading={state.loading}
                        icon={
                            <Icon
                                name="log-in"
                                color="white"
                                size={19}
                            />
                        }
                        onPress={() => {
                            this.setState({
                                loading: true
                            })

                            setTimeout(() => {
                                this.setState({
                                    loading: false
                                })
                            }, 2000)
                        }} title=" Login"/>
                </View>
            </View>
        </KeyboardAvoidingView>);
    }
}

const stateMapToProps = (state) => ({
    login: state.login
});
export default signin(Signin);