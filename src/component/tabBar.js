import React from 'react'
import {NavLink} from 'react-router-dom'

import './tabbar.scss'
import BarItem from './barItem'

function tabBar() {
    return (
        <div className='tab-bar'>
            <NavLink to='/home' className='home' activeClassName=' active'>
                <span>首页</span>
            </NavLink>
            <NavLink to='/bookrack' className='bookrack' activeClassName='active'>
                <span>书架</span>
            </NavLink>
            <NavLink to='/search' className='magnifier' activeClassName='active'>
                <span>搜索</span>
            </NavLink>

        </div>
    )
}
export default tabBar;