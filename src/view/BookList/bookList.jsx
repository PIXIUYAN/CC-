import React from 'react'
import './bookList.scss'
import BookCell from './bookCell.js';

import API from '../../api/api.js'
import Loading from '../../component/loading'
import BackSVG from '../../public/images/back2.svg'
class BookList extends React.Component {
    constructor(props) {
        super(props)
        this.init()
    }

    // 初始化
    init() {
        this.state = {
            bookList: [],
            swiper: null,
            isLoadAll: false,
            loading: false,
            startIndex: 0,
            stopHandleClick: false
        }

    }

    startLoading() {
        this.setState({isLoading: true})
    }
    endLoading() {
        this.setState({isLoading: false})
    }

    componentDidUpdate() {

        this
            .state
            .swiper
            .onResize()
    }
    componentDidMount() {
        var {location} = this.props;
        var searchParams = window.getQueryObject(location.search)
        var loadMore = this.LoadMoreFunctionActory()
        var swiper = new Swiper('.book-list', {
            slidesPerView: "auto",
            mousewheelControl: true,
            direction: 'vertical',
            freeMode: true,

            onTouchEnd: (s, e) => {
                event.stopPropagation()
            },
            onReachEnd: (swiper) => {
                // 加载更多数据
                if (this.state.loading == false) 
                    loadMore()
            }
        });
        this.setState({swiper: swiper})
        // 首次加载

    }

    // 数据全部加载完毕
    haveloadedAll() {
        this.setState({isLoadAll: true})
    }

    updateBookList(starIndex) {
        this.startLoading()
        var {location} = this.props;
        var searchParams = window.getQueryObject(location.search)

        if (searchParams['query']) 
            return API.fetchBookList(searchParams['query'], starIndex).then(data => {
                console.log('data', data)
                this.endLoading()
                if (data.books.length > 0) {
                    this.setState({
                        bookList: [
                            ...this.state.bookList,
                            ...data.books
                        ]
                    })
                }

                if (data.books.length < 19 || (!data.books.length > 0)) 
                    this.haveloadedAll()
            })

        if (searchParams['major']) 
            return API.fetchListAtMajor(searchParams['major'], starIndex).then(data => {
                this.endLoading()
                if (data.books.length > 0) {

                    var books = data
                        .books
                        .map((book, index) => {
                            book.cat = searchParams['major']
                            return book
                        });

                    this.setState({
                        bookList: [
                            ...this.state.bookList,
                            ...data.books
                        ]
                    })
                }
                if ((data.books.length < 19) || (!data.books.length > 0)) 
                    this.haveloadedAll()
            })

            }

    LoadMoreFunctionActory() {
        return () => {
            this.updateBookList(this.state.startIndex)
            this.setState({
                starIndex: this.state.startIndex += 20
            })
        }
    }

    render() {
        var bookList = this.state.bookList

        return (
            <div className='page'>
                <header>
                    <BackSVG
                        onClick={() => {
                        this
                            .props
                            .history
                            .goBack()
                    }}/>
                    <p>
                        {window.getQueryObject(this.props.location.search)['major'] || '热门搜索'
}
                    </p>
                </header>
                <div className='book-list swiper-container'>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            {bookList
                                ? bookList.map((book, index) => {
                                    return <BookCell key={'book-' + index} book={book}/>
                                })
                                : ''
}
                        </div>
                        <div className="swiper-slide">
                            {this.state.isLoadAll
                                ? (<Loading show={false} label='----我也是有底线的----'/>)
                                : (<Loading show={true} label='火速加载中'/>)
}
                        </div>

                    </div>

                </div>

            </div>

        )
    }

}

export default BookList