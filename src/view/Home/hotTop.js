import React from 'react';
import Cell from '../BookList/bookCell.js';

function hotTop({
    books = []
}) {

    return <div>
        <div className='hot-recommend'>热门推荐
        </div>

        {books.map((book, index) => {
            book.cat = '荐'
            return <Cell book={book} key={"homr-cell-" + index}/>
        })
}
    </div>
}

export default hotTop;