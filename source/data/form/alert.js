import React from 'react'
import {response} from '../app/form'
import {Text} from "react-native-elements";
import propTypes from 'prop-types'
import {AlertStyle} from './styles'
class Alert extends React.Component{
    render()
    {
        if(this.props.response[this.props.id])
        {
            let style = AlertStyle.success
            if(this.props.response[this.props.id].type === 'error')
                style = AlertStyle.error
            return (
                <Text style={style}>{this.props.response[this.props.id] && this.props.response[this.props.id].message}</Text>
            )
        }
        else{
            return null
        }
    }
}
Alert.propTypes = {
  id:propTypes.string.isRequired,
};
export default response(Alert)