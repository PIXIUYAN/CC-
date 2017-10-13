import React from 'react';
import API from '../../api/api'
import './chapterContent.scss'
import Loading from '../../component/loading'
import Mask from '../../component/mask'
import {RestoredScroll} from 'react-router-dom'
import BarItem from '../../component/barItem.js'
// 资源
import BackSVG from '../../public/images/back.svg'
import SettingSVG from '../../public/images/设置.svg'
import DaySVG from '../../public/images/日间.svg'
import NightSVG from '../../public/images/夜间.svg'
import CatalogSVG from '../../public/images/目录.svg'
import HideSVG from './../../public/images/back2.svg'

var store = require('store')
// ChapterContent
class ChapterContent extends React.Component {
    constructor(props) {
        super(props)
        this.init()
    }
    init() {
        var {match, location} = this.props
        var bookid = match.params.bookid
        var bookname = window.getQueryObject(location.search)['bookname']

        var bookrack = store.get('bookrack') || {}

        var hadCollection = bookrack[bookid]
            ? true
            : false;

        var chapterIndex;
        if (bookrack[bookid]) 
            chapterIndex = bookrack[bookid].historyChapterIndex || 0
        else 
            chapterIndex = 0

        this.state = {
            chapterList: [],
            chapterIndex: chapterIndex,
            isLoading: false,
            chapterContentList: [],
            showToobar: false,
            showCatalog: false,
            nightPattern: false,
            ascending: true,
            ConstChapterList: [],
            hadCollection: hadCollection
        }

    }

    //  加入书架
    handleCollectionTheBook() {
        var {match, location} = this.props
        var bookid = match.params.bookid
        var searchParmas = window.getQueryObject(location.search)
        var bookname = searchParmas['bookname']
        var cover = searchParmas['cover']
        var bookrack = store.get('bookrack') || {}
        bookrack[bookid] = {
            bookname,
            progress: 0,
            cover,
            historyChapterIndex: this.state.chapterIndex
        }
        store.set('bookrack', bookrack)
        this.setState({hadCollection: true})
    }
    // 从书架中删除
    handleDeleteTheBook() {
        var {match, location} = this.props
        var bookid = match.params.bookid
        var bookname = getQueryObject(location.search)['bookname']
        var bookrack = store.get('bookrack') || {}
        delete bookrack[bookid]

        store.set('bookrack', bookrack)
        this.setState({hadCollection: false})
    }

    //  夜间 / 日间 模式切换
    handleToggPattern() {
        this.setState({
            nightPattern: !this.state.nightPattern
        })
    }

    // 目录的控制
    handleToggleCatalog() {
        !this.state.showCatalog
            ? this.handleShowCatalog()
            : this.handleHideCatalog()

    }
    // 显示目录
    handleShowCatalog() {
        var directoryBox$ = this.refs['novel-directory-box']
        // 目录移动到相对的位置 从左滑入
        setTimeout(() => {
            var directory$ = this.refs['novel-directory']
            var theChapter$ = document.getElementById('chapter-' + this.state.chapterIndex)
            this.setState({showCatalog: true})
            directoryBox$.style.display = 'block'
            directoryBox$.className = ' animated slideInLeft'
            directory$.scrollTop = theChapter$.offsetTop - document.getElementsByClassName('sticky')[0].offsetHeight
            console.log('theChapter', theChapter$.offsetTop)

        }, 0);
    }
    //隐藏目录
    handleHideCatalog() {
        var directoryBox$ = this.refs['novel-directory-box']
        directoryBox$.className = ' animated slideOutLeft'
        setTimeout(() => {

            this.setState({showCatalog: false, showToobar: false})
        }, 300);
    }

    //  工具栏的控制
    handleToggleToolBar() {
        this.state.showToobar
            ? this.handleHideToolBar()
            : this.handleShowToolBar()

    }
    handleShowToolBar() {
        this.setState({showToobar: true})
    }
    handleHideToolBar() {
        this.setState({showToobar: false})
    }
    //  章节内容的控制
    resetContentList(data) {
        this.setState({chapterContentList: []})
    }

    updateContentList(data) {
        this.setState({
            chapterContentList: [
                ...this.state.chapterContentList,
                data['chapter']
            ]
        })
    }

    handleGetChapterContentAtIndex(chapterIndex) {
        if (this.state.chapterList.length > 0) {

            var link = this.state.chapterList[chapterIndex]['link']
            API
                .fetchChaperContent(link)
                .then(data => {
                    this.updateContentList(data)
                })
        }

    }

    firstLoad() {

        this.handleGetChapterContentAtIndex(this.state.chapterIndex)
        this.setState({chapterIndex: this.state.chapterIndex})
    }

    loadMore() {
        if (this.state.chapterList.length > 0 && this.state.chapterIndex < this.state.chapterList.length - 1) {
            this.handleGetChapterContentAtIndex(++this.state.chapterIndex)

        }

    }

    componentDidMount() {

        var {match} = this.props
        var bookid = match.params.bookid

        // 网路请求
        API
            .fetchBookSource(bookid)
            .then(data => {

                // this.setState({bookSource: data})
                var sourceId;
                if (data.length > 2) 
                    sourceId = data[2]['_id']
                else 
                    sourceId = data[0]['_id']

                var bookSource = data
                API
                    .fetchChaperList(sourceId)
                    .then(data => {

                        this.setState({
                            bookSource: bookSource,
                            chapterList: data['chapters'],
                            ConstChapterList: [...data['chapters']]
                        })
                        var link = data['chapters'][this.state.chapterIndex]['link']

                        // 首次加载数据
                        this.firstLoad()
                    })
            })

        // swiper 初始化
        var swiper = new Swiper('#swiper-chapter', {
            slidesPerView: "auto",
            mousewheelControl: true,
            direction: 'vertical',
            freeMode: true,
            onTap: () => {
                this.handleToggleToolBar()
            },
            onReachEnd: (swiper) => {
                // 加载更多数据
                this.loadMore()
            }
        })

        // 更新state
        this.setState({swiper: swiper})

    }

    componentDidUpdate() {
        this.state.swiper
            ? this
                .state
                .swiper
                .onResize()
            : '';

    }

    handleStartLoading() {
        this.setState({isLoading: true})
    }

    handleEndLoading() {
        this.setState({isLoading: false})
    }

    handleSelectChapterAtIndex(index) {
        return () => {
            location.hash = 'chapter' + index
            this.resetContentList()
            this.handleGetChapterContentAtIndex(index)
            this.setState({chapterIndex: index})
            this.handleToggleCatalog()
        }
    }

    handleLoadPull(chapterIndex) {}
    render() {
        var chapterIndex = this.state.chapterIndex

        // 上次阅读记录
        if (this.state.hadCollection) {
            var {match} = this.props
            var bookid = match.params.bookid
            var bookrack = store.get('bookrack')
            bookrack[bookid].historyChapterIndex = chapterIndex
            store.set('bookrack', bookrack)
        }

        var chapterList = this.state.chapterList
        var chapterContentList = this.state.chapterContentList
        var textEle = [];
        console.log(chapterContentList)
        if (chapterContentList.length > 0) {
            textEle = chapterContentList.map((content, index, arr) => {
                return <div
                    className={this.state.nightPattern
                    ? 'text-body night'
                    : 'text-body '}
                    key={'text-content' + index}>
                    <h1>{content.title}
                    </h1>
                    {content
                        .body
                        .replace(/\n+/g, "<hr/>")
                        .split('<hr/>')
                        .map((text, index) => {
                            return <p key={'text-p-' + index}>
                                {text}
                            </p>
                        })
}
                </div>

            })
        }

        return <div className='chapter-content'>

            {/* 顶部导航栏 */}

            <header
                className={this.state.showToobar
                ? ' animated slideInDown'
                : ' animated slideOutUp'}>
                <div
                    className="back"
                    onClick={() => {
                    history.back()
                }}>
                    <BackSVG/>
                </div>

                <div
                    className='addToBookrack'
                    onClick={() => {
                    this.state.hadCollection
                        ? this.handleDeleteTheBook()
                        : this.handleCollectionTheBook()
                }}>
                    {this.state.hadCollection
                        ? '已收藏'
                        : '加入书架'}
                </div>

            </header>

            {/* 小说正文 */}

            <div className='swiper-container ' id='swiper-chapter'>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        {textEle}
                    </div>
                    {this.state.chapterIndex == this.state.chapterList.length - 1
                        ? (
                            <div className="swiper-slide load-pull">
                                <Loading show={false} label='----我也是有底线的----'/>
                            </div>
                        )
                        : (

                            <div className="swiper-slide load-pull">
                                <Loading show={true} label='火速加载'/>

                            </div>
                        )
}

                </div>
            </div>
            {/* 目录 */}
            <div
                ref='novel-directory-box'
                style={{
                display: "none",
                top: 0,
                left: 0,
                zIndex: 10000,
                background: "white",
                height: '100vh',
                position: 'fixed',
                width: '100vw',
                overflow: 'hidden',
                animationDuration: '.3s'
            }}>
                <div className="novel-directory" ref='novel-directory'>
                    <div className='sticky'>
                        <div className='directory-label'>
                            目录
                        </div>
                        <div className='directory-control'>
                            <div className='total-num'>
                                共{this.state.chapterList.length}章
                            </div>
                            <div
                                className='reverse'
                                onClick={(e) => {
                                e.stopPropagation();
                                this.setState({
                                    ascending: !this.state.ascending
                                })
                            }}>
                                {this.state.ascending
                                    ? '倒序'
                                    : '正序'}

                            </div>
                        </div>
                    </div>
                    {/* 所有章节 */}

                    <div
                        className={this.state.ascending
                        ? 'someone-chapter-box'
                        : 'someone-chapter-box reverse'}>
                        {this.state.chapterList.length > 0
                            ? this
                                .state
                                .chapterList
                                .map((chapter, index) => {
                                    return <div
                                        id={'chapter-' + index}
                                        className={index == this.state.chapterIndex
                                        ? 'someone-chapter active'
                                        : 'someone-chapter'}
                                        key={'chapter-' + index}
                                        onClick={this.handleSelectChapterAtIndex(index)}>
                                        {chapter.title}
                                    </div>

                                })
                            : ''}
                    </div>

                </div>
                {/* 折叠目录 */}
                <div
                    className="hide-directory"
                    onClick={(e) => {
                    this.handleToggleCatalog()
                }}>
                    <HideSVG/>
                </div>
            </div>

        </div>

    }

}

export default ChapterContent;
