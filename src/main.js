import React from 'react'
import ReactDom from 'react-dom'
import initReactFastclick from 'react-fastclick'
import 'whatwg-fetch';

import 'babel-polyfill';
import './main.scss';

import {CSSTransition} from 'react-transition-group'

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

import BookListContainer from './view/BookList/bookList.jsx'
import BookDetailContainer from './view/BookDetail/bookDetail.jsx'
import ChapterContentContainer from './view/ChapterContent/chapterContent.jsx'
import TabBarContainer from './component/tabBar.js'
import BookrackContainer from './view/Bookrack/Bookrack.jsx'
// 路由
import {HashRouter as Router, Link, Route} from 'react-router-dom'

import Container from './Container.jsx';
// app 程序入口
const Main = (props) => {
    return <Container {...props}>
        <Route path='/' component={TabBarContainer}/>
        <Route exact path='/booklist' component={BookListContainer}/>
        <Route exact path='/books' component={BookDetailContainer}/>
        <Route exact path='/chapters' component={ChapterContentContainer}/>
    </Container>
}

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Router>
            <div>
                <Route path='/' component={Main}/>
            </div>
        </Router>
    }
}

var root = document.getElementById('root')

ReactDom.render(
    <App/>, root);