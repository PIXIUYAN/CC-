import React from 'react';
import './recently.scss'
import HistorySVG from '../../public/images/history.svg'
import ClearSVG from '../../public/images/clear.svg'
import {Link} from "react-router-dom"

var store = require('store')

function RecentlySearch({historySearch, handleClear}) {
    [].splice()
    console.log('handleClear', handleClear)
    return historySearch
        ? (
            <div className='recently-search'>
                <h4 className='item-label'>最近搜索</h4>
                <div className='item-list'>
                    {historySearch.map((item, index) => {
                        return <Link
                            className='item'
                            key={'recently-' + index}
                            to={{
                            pathname: '/booklist',
                            search: '?query' + item,
                            state: {
                                showIndex: 2
                            }
                        }}>
                            <HistorySVG/>
                            <span>{item}</span>
                        </Link>
                    })
}
                </div>
                <div className='clear'>
                    <ClearSVG/>
                    <div onClick={() => handleClear()}>清除历史记录</div>
                </div>
            </div>
        )
        : <div></div>

}

export default RecentlySearch;