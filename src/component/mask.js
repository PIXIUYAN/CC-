import React from 'react'
import './mask.scss'
function mask(props) {

    return <div id='mask' {...props}>
        {props.children}
    </div>
}
export default mask;


