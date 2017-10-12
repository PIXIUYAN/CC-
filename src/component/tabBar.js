import React from 'react'
import {NavLink} from 'react-router-dom'

import './tabbar.scss'
import BarItem from './barItem'

function tabBar() {
    console.log(arguments)
    return (
        <div className='tab-bar'>
            <NavLink to='/main/home' className='home' activeClassName=' active'>
                <span>首页</span>
            </NavLink>
            <NavLink to='/main/bookrack' className='bookrack' activeClassName='active'>
                <span>书架</span>
            </NavLink>
            <NavLink to='/main/search' className='magnifier' activeClassName='active'>
                <span>搜索</span>
            </NavLink>

        </div>
    )
}
export default tabBar;