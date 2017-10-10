import React from 'react'
import {connect} from 'react-redux'
import './bookDetail.scss'
import API from '../../api/api'
import {Link} from 'react-router-dom'
class BookDetail extends React.Component {
    constructor(props) {
        super(props)
        this.init()

    }
    init() {
        var {match} = this.props
        var boookId = match.params.bookid
        this.state = {
            bookInfo: null
        }

        API
            .fetchBookInfo(boookId)
            .then(data => {
                this.setState({bookInfo: data})
            })
    }

    componentDidMount() {}
    render() {
        var data = this.state.bookInfo
        console.log("data", data)
        if (!data) {
            return <div></div>
        }
        return <div className='book-detail'>
            <header>
                <h2>
                    {data.title}
                </h2>
            </header>
            <div className="img-box">
                <img src={decodeURIComponent(data.cover.split('/agent/')[1])} alt=""/>
                <div className='author'>
                    {data.author}
                </div>
            </div>

            <div className="longInfo">
                <span>简介:
                </span>
                <p>

                    {data.longIntro}
                </p>
                <div className='word-count'>
                    <span>字数:</span>
                    <span>{Math.ceil(data.wordCount / 10000)
}</span>
                    <span>万字</span>

                </div>
                <div className='last-chapter'>
                    <span>最新章节:</span>
                    {data.lastChapter}
                </div>
            </div>
            <Link
                className="read"
                to={'/chapters/' + data['_id'] + '?bookname=' + data.title + '&&cover=' + decodeURIComponent(data.cover.split('/agent/')[1])}>
                开始阅读
            </Link>
            <div className="tags">
                {data
                    .tags
                    .map((tag, index) => {
                        return <span key={'tag-' + index}>{tag}</span>
                    })
}

            </div>
        </div>
    }
}

export default BookDetail;
