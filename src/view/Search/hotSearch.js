import React from 'react'
import './hotSearch.scss'

import {Link} from 'react-router-dom'

const hotWords = [
    '一念永恒',
    '斗罗大陆',
    '全职高手',
    '全能',
    '龙王传说',
    '大主宰',
    '神印王座',
    '基因猎人',
    '雪中悍刀行',
    '武动乾坤',
    '升邪',
    '校花的贴身高手'
]

function HotSearch() {
    return <div className='hot-search'>
        <h4 className='item-label'>热门搜索</h4>
        <div className='item-list'>
            {hotWords.map((word, index) => {
                return <Link to={'/booklist?query=' + encodeURIComponent(word)} key={'word-' + index}>
                    <div className='item'>
                        {word}
                    </div>
                </Link>

            })
}

        </div>
    </div>

}

export default HotSearch;