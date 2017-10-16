import React from 'react'
import './Bookrack.scss'
import {Link} from 'react-router-dom'
var store = require('store')

class Bookrack extends React.Component {

    constructor(props) {
        super(props)

    }
    render() {
        var {history} = this.props
        var bookrack = store.get('bookrack')

        return <div className='book-rack'>
            {bookrack
                ? Object
                    .entries(bookrack)
                    .map(function (array, index) {
                        return <Link
                            className='bookrack-cell'
                            key={'bookrack-cell-' + index}
                            to={'/chapters?bookid=' + array[0] + '&&bookname=' + array[1].bookname + '&&cover=' + array[1].cover}>
                            <img src={array[1].cover} alt=""/>
                            <h4>{array[1].bookname}</h4>
                        </Link>

                    })
                : <div
                    style={{
                    fontWeight: '900',
                    color: 'RGBA(219, 219, 219, 1)',
                    fontFamily: '楷书',
                    fontSize: '35px',
                    textAlign: "center",
                    display: "block",
                    width: " 100vw",
                    height: "85vh",
                    lineHeight: '85vh'
                }}>
                    你还没有收藏书籍
                </div>
}

        </div>
    }
}

export default Bookrack;