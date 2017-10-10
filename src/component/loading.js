import React from 'react';
import './loading.scss'
function loading(props) {

    var {show, lable} = props;

    return (
        <div className='loading'>
            <div
                className="mul7"
                style={{
                display: show
                    ? 'inline-block'
                    : 'none'
            }}>
                <div className="mul7circ m7c1"></div>
                <div className="mul7circ m7c2"></div>
                <div className="mul7circ m7c3"></div>
                <div className="mul7circ m7c4"></div>
                <div className="mul7circ m7c5"></div>
                <div className="mul7circ m7c6"></div>
                <div className="mul7circ m7c7"></div>
                <div className="mul7circ m7c8"></div>
                <div className="mul7circ m7c9"></div>
                <div className="mul7circ m7c10"></div>
                <div className="mul7circ m7c11"></div>
                <div className="mul7circ m7c12"></div>
            </div>
            <span>
                {props.label}
            </span>
        </div>

    )
}

export default loading;