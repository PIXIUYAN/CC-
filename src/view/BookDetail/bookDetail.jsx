import React from 'react'
import './bookDetail.scss'
import API from '../../api/api'
import {Link} from 'react-router-dom'
import BackSVG from '../../public/images/back2.svg'
class BookDetail extends React.Component {
    constructor(props) {
        super(props)
        this.init()

    }
    init() {
        var {location} = this.props
        var bookid = window.getQueryObject(location.search)['bookid']
        this.state = {
            bookInfo: null
        }

        API
            .fetchBookInfo(bookid)
            .then(data => {
                this.setState({bookInfo: data})
            })
    }

    componentDidMount() {}
    render() {
        var data = this.state.bookInfo

        if (!data) {
            return <div></div>
        }
        return <div className='book-detail'>
            <header>
                <BackSVG
                    onClick={() => {
                    this
                        .props
                        .history
                        .goBack()
                }}/>
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
                to={'/chapters?bookid=' + data['_id'] + '&&bookname=' + data.title + '&&cover=' + decodeURIComponent(data.cover.split('/agent/')[1])}>
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
