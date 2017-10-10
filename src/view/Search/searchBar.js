import React from 'react'

import SVGSearch from '../../public/images/search.svg'

var store = require('store')

function searchBar({handleSubmit}) {

    return <div className='search-bar'>
        <SVGSearch/>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
            <input type="searh" placeholder='神马小说都能搜' autoFocus name='input'/>
        </form>

        <div className='label'>
            搜索
        </div>
    </div>
}

export default searchBar;