import React from 'react'
import './barItem.scss'

function barItem(props) {
    var {svg, label} = props
    return <div className='bar-item'>
        {svg}
        <p>{label}</p>
    </div>

}

export default barItem;