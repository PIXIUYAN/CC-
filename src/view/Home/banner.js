import React from 'react';
import {Link} from 'react-router-dom'
function Banner() {
    return (
        <div className="swiper-container home-banner">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <Link to='/books/5086612fd7a545903b000021'>
                        <img
                            src="https://qidian.qpic.cn/qidian_common/349573/9003484ca83101d4d29481d05112593d/0"
                            alt=""/>
                    </Link>

                </div>
                <div className="swiper-slide">
                    <Link to='/books/58e37ad3cf617bdd6faf8f65'>
                        <img
                            src="https://qidian.qpic.cn/qidian_common/349573/618f13c5fe50f74543e871c736e5aa04/0"
                            alt=""/>
                    </Link>

                </div>
                <div className="swiper-slide">
                    <Link to='/books/58b5ddb77f4aaab27a9227a1'>
                        <img
                            src="https://qidian.qpic.cn/qidian_common/349573/b3d1286bf631867e8d783f0fae0287b9/0"
                            alt=""/>
                    </Link>

                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    )
}
export default Banner;