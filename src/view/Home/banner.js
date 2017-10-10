import React from 'react';

function Banner() {
    return (
        <div className="swiper-container home-banner">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img
                        src="https://i.zhulang.com/admin/bang/2017-09-25/59c87153eb383.jpg"
                        alt=""/>
                </div>
                <div className="swiper-slide">
                    <img
                        src="https://i.zhulang.com/admin/bang/2017-09-25/59c888b33f57d.jpg"
                        alt=""/>
                </div>
                <div className="swiper-slide">
                    <img
                        src="https://i.zhulang.com/admin/bang/2017-09-25/59c882f3ee78d.jpg"
                        alt=""/>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    )
}
export default Banner;