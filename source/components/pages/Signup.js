import React, {Component} from 'react'
import {StyleSheet, View, Dimensions, KeyboardAvoidingView} from 'react-native';
import {Button, Input,Text} from 'react-native-elements'
import {ToastAndroid} from 'react-native';
import style from '../styles/'
import Icon from '@expo/vector-icons/Feather'
import {connect} from 'react-redux'
import {signup} from '../../data/app'
import {request_id, loading_id} from '../../config/id'
import {Alert} from '../../data/form'

let deviceWidth = Dimensions.get('window').width
import colors from '../../config/color'

import {getResponse} from '../../utils/getResponse'
import {Actions} from "react-native-router-flux";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            checked: false,
            name:'',
            password_r:''
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
        get
    }
    nameChange = (val)=>{
        this.setState({
            name:val
        })
    }
    passwordConfirmationChange=(val)=>{
        this.setState({
            password_r:val
        })
    }
    signup = ()=>{
        let payload = {
            name:this.state.name,
            email:this.props.login.email,
            password:this.props.login.password,
            password_confirmation:this.state.password_r
        }
        this.props.SignupForm(payload)
    }
    render() {
        let state = this.state;
        return (<KeyboardAvoidingView style={style.container} behavior="padding" enabled>
            <Text h2>Sign up</Text>
            <Alert id={request_id.signup}/>
            <Input
                placeholder='Name'
                leftIcon={{type: 'feather', name: 'user'}}
                leftIconContainerStyle={{
                    paddingRight: 10
                }}
                shake
                style={{
                    fontSize: 14
                }}
                errorMessage={getResponse(this.props.response, request_id.signup, "name")}
                textContentType='emailAddress'
                value={this.state.name}
                name="name"
                onChangeText={(val) => this.nameChange(val)}
            />
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
                errorMessage={getResponse(this.props.response, request_id.signup, "email")}
                textContentType='emailAddress'
                value={this.props.login.email}
                name="email"
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
                errorMessage={getResponse(this.props.response, request_id.signup, "password")}
                onChangeText={(val) => this.passwordInputChange(val)}
                value={this.props.login.password}
                name="password"
            />
            <Input
                placeholder='Password confirmation'
                leftIcon={{type: 'feather', name: 'lock'}}
                leftIconContainerStyle={{
                    paddingRight: 10
                }}
                secureTextEntry
                textContentType='password'
                errorMessage={getResponse(this.props.response, request_id.signup, "password_confirmation")}
                onChangeText={(val) => this.passwordConfirmationChange(val)}
                value={this.state.password_r}
                name="password_confirmation"
            />
            <View style={{width: deviceWidth}}>
                <View style={{position: 'absolute', left: 0}}>
                    <Button
                        style={{color: colors.link, marginLeft: 10, marginTop: 15}}
                        title="Already have an account"
                        type="clear"
                        onPress={()=>Actions.pop() }
                    />
                </View>
                <View style={{
                    width: 100,
                    position: 'absolute',
                    right: 10,
                    top: 5
                }}>
                    <Button
                        loading={this.props.loading[loading_id.button + 'signup']}
                        icon={
                            <Icon
                                name="log-in"
                                color="white"
                                size={19}
                            />
                        }
                        onPress={() => {
                            this.signup()
                        }} title=" Signup"/>

                </View>

            </View>

        </KeyboardAvoidingView>);
    }
}

export default signup(Signup);