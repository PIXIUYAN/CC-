import React from 'react'
import ReactDom from 'react-dom'
import store from './store/createStore'
import {Provider} from 'react-redux'
import initReactFastclick from 'react-fastclick'
import './public/js/swiper.min.js'
import 'whatwg-fetch';
require('core-js/fn/object/entries');

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

console.log('entries', Object.entries)
//  添加移动端点击
initReactFastclick()
//资源
import './public/css/reset.css'
import './public/css/animate.css'
import "./public/css/swiper.min.css"

// 组件
import Guide from './view/Guide/Guide.jsx'
import Home from './view/Home/home.jsx'
import BookList from './view/BookList/bookList.jsx'
import BookDetail from './view/BookDetail/bookDetail.jsx'
import ChapterContent from './view/ChapterContent/chapterContent.jsx'
import TabBar from './component/tabBar'
import Search from './view/Search/search.jsx'
import Bookrack from './view/Bookrack/Bookrack.jsx'
// 路由
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom'

var routes = <div>
    <Route path='/'>
        <div>
            <Route path='/' component={TabBar}/>
            <Route path='/home' component={Home}/>
            <Route path='/bookrack' component={Bookrack}/>
            <Route path='/search' component={Search}/>
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
    }

    render() {

        return (
            <Provider store={store}>
                <Router>
                    {routes}
                </Router>
            </Provider>

        )
    }
}

var root = document.getElementById('root')
ReactDom.render(
    <App/>, root)