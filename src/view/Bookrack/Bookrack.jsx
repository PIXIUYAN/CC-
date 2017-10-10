import React from 'react'
import './Bookrack.scss'

var store = require('store')

class Bookrack extends React.Component {

    constructor(props) {
        super(props)

    }
    render() {
        var {history} = this.props
        var bookrack = store.get('bookrack') || {}

        return <div className='book-rack'>
            {Object
                .entries(bookrack)
                .map(function (array, index) {
                    return <div
                        className='bookrack-cell'
                        key={'bookrack-cell-' + index}
                        onClick={() => {
                        history.push('/chapters/' + array[0] + '?bookname=' + array[1].bookname + '&&cover=' + array[1].cover)
                    }}>
                        <img src={array[1].cover} alt=""/>
                        <h4>{array[1].bookname}</h4>
                    </div>

                })
}
        </div>
    }
}

export default Bookrack;