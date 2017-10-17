import React from 'react'
import {NavLink, Route, Switch} from 'react-router-dom'

import './tabbar.scss'
import BarItem from './barItem'
import Home from '../view/Home/home.jsx'
import Bookrack from '../view/Bookrack/Bookrack.jsx'
import Search from '../view/Search/search.jsx'

export default class TabBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showIndex: history.showIndex || 0
        }
    }
    componentWillUnmount() {
        window.history.showIndex = this.state.showIndex
        console.log("historyhistory", history)

    }
    render() {
        var showComponet;
        switch (this.state.showIndex) {
            case 0:
                showComponet = <Home/>
                break;
            case 1:
                showComponet = <Bookrack/>
                break;
            case 2:
                showComponet = <Search {...this.props}/>
                break;
            default:
                showComponet = null;
                break;
        }

        return (
            <div>
                <div className='tab-bar'>
                    <a
                        className=
                        {this.state.showIndex==0?'home active':'home'}
                        onClick={() => this.setState({showIndex: 0})}>
                        <span>首页</span>
                    </a>
                    <a
                        className=
                        {this.state.showIndex==1?'bookrack active':'bookrack'}
                        onClick={() => this.setState({showIndex: 1})}>
                        <span>书架</span>
                    </a>
                    <a
                        className=
                        {this.state.showIndex==2?'magnifier active':'magnifier'}
                        onClick={() => this.setState({showIndex: 2})}>
                        <span>搜索</span>
                    </a>
                </div>

                {showComponet}

            </div>
        )
    }

}