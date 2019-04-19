import React from 'react'
import { Button as Btn} from 'react-native-elements'

export const Button = (props)=>{
    return(
        <Btn title={props.title} {...props} ></Btn>
    )
}