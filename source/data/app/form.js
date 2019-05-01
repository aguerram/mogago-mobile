import {connect} from 'react-redux'

export const response = connect(
    (state, props)=>{
        return {
            response:state.response,
        }
    }
)