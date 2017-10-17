import React from 'react'
import {Link} from 'react-router-dom'
import './bookCell.scss'
export default function ({book, onClick}) {
    return (

        <div className='book-cell' onClick={onClick}>
            <div className="img-box">
                <img src={decodeURIComponent(book.cover.split('/agent/')[1])} alt=""/>
            </div>
            <div className='info-box'>
                <h4>{book.title}</h4>
                <div
                    className="description"
                    dangerouslySetInnerHTML={{
                    __html: book.shortIntro
                }}></div>
                <div className="tag">
                    {book.cat}
                </div>
                <div className="author">
                    <img src="/public/images/author.svg" alt=""/>
                    <span>{book.author}</span>
                </div>

            </div>
        </div>

    )
}