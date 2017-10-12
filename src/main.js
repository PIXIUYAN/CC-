import React from 'react'
import ReactDom from 'react-dom'
import initReactFastclick from 'react-fastclick'
import 'whatwg-fetch';
import Bundle from './Bundle.jsx'
import 'babel-polyfill';
import './main.scss'
// getQueryObject
window.getQueryObject = function getQueryObject(url) {
    url = url == null
        ? window.location.href
        : url;
    var search = url.substring(url.lastIndexOf("?") + 1);
    var obj = {};
    var reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg, function (rs, $1, $2) {
        var name = decodeURIComponent($1);
        var val = decodeURIComponent($2);
        val = String(val);
        obj[name] = val;
        return rs;
    });
    return obj;
}

//  添加移动端点击
initReactFastclick()
// 资源 import './public/css/reset.css'; import './public/css/animate.css' import
// "./public/css/swiper.min.css" 组件 import GuideContainer from
// 'bundle-loader?lazy&name=app-[name]!./view/Guide/Guide.jsx'
import HomeContainer from 'bundle-loader?lazy&name=app-[name]!./view/Home/home.jsx'
import BookListContainer from 'bundle-loader?lazy&name=app-[name]!./view/BookList/bookList.jsx'
import BookDetailContainer from 'bundle-loader?lazy&name=app-[name]!./view/BookDetail/bookDetail.jsx'
import ChapterContentContainer from 'bundle-loader?lazy&name=app-[name]!./view/ChapterContent/chapterContent.jsx'
import TabBarContainer from './component/tabBar.js'
import SearchContainer from 'bundle-loader?lazy&name=app-[name]!./view/Search/search.jsx'
import BookrackContainer from 'bundle-loader?lazy&name=app-[name]!./view/Bookrack/Bookrack.jsx'

// Guide const Guide = () => (     <Bundle load={GuideContainer} laze>
// {Component => <Component/>}     </Bundle> ) Home
const Home = (props) => {
    console.log('Home', arguments)
    return <Bundle load={HomeContainer} {...props}>
        {Component => <Component/>}
    </Bundle>
}

//BookList

const BookList = (props) => (
    <Bundle load={BookListContainer}>
        {Component => <Component {...props}/>}
    </Bundle>
)
//  BookDetail
const BookDetail = (props) => (
    <Bundle load={BookDetailContainer}>
        {Component => <Component {...props}/>}
    </Bundle>
)

//  ChapterContent
const ChapterContent = (props) => (
    <Bundle load={ChapterContentContainer}>
        {Component => <Component {...props}/>}
    </Bundle>
)
//TabBar
const TabBar = (props) => (
    <Bundle load={TabBarContainer}>
        {Component => <Component {...props}/>}
    </Bundle>
)
//  Search
const Search = (props) => (
    <Bundle load={SearchContainer}>
        {Component => <Component {...props}/>}
    </Bundle>
)
//  Bookrack
const Bookrack = (props) => (
    <Bundle load={BookrackContainer}>
        {Component => <Component {...props}/>}
    </Bundle>
)
// 路由
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom'

var routes = <div>
    <Route path='/'>
        <div>
            <Route path='/' component={TabBarContainer}/>
            <Route path='/main/home' component={Home}/>
            <Route path='/main/bookrack' component={Bookrack}/>
            <Route path='/main/search' component={Search}/>
        </div>
    </Route>
    <Route path='/booklist' component={BookList}/>
    <Route path='/books/:bookid' component={BookDetail}/>
    <Route path='/chapters/:bookid' component={ChapterContent}/>
</div>
// app 程序入口
class App extends React.Component {
    constructor(props) {
        super(props)
        console.log(1111111)
    }

    render() {
        return (

            <Router>
                {routes}
            </Router>

        )
    }
}

var root = document.getElementById('root')
ReactDom.render(
    <App/>, root)