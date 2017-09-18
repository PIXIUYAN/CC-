

import React from 'react'
import "./Guide.scss"

var htmlStr = `
<div class="swiper-container fullPage">
    <div class="swiper-wrapper">
        <div class="swiper-slide" style="
        background-image:url('../public/images/bg_img.jpeg');
        background-size:cover;
        background-repeat:no-repeat;
        ">
            <div class="full-one-box">
                <input type="text" readonly class="ani full-one-input   " swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">
                <div class="ani full-one-search
                  "  swiper-animate-effect="slideInLeft" swiper-animate-duration="1s" swiper-animate-delay=".8s">
                    <embed src="../public/images/search.svg" type="">
                </div>
                <span class="ani full-one-text2  " swiper-animate-effect="rollIn" swiper-animate-duration="1s" swiper-animate-delay=".8s"> 一键秒搜 </span>
                <span class="ani full-one-text " swiper-animate-effect="jackInTheBox" swiper-animate-duration="1s" swiper-animate-delay="2.2s"> 万水千山,你愿陪我一起看吗? </span>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="full-two-box">
                <div class="full-two-img-box">
                    <img src="../public/images/full-two.png" class="ani full-two-img" swiper-animate-effect="rollIn" swiper-animate-duration="1s"
                        swiper-animate-delay=".2s">
                </div>


                <div class="full-two-text-box">
                    <div class="ani text-one" swiper-animate-effect="slideInRight" swiper-animate-duration="1s" swiper-animate-delay="1.2s">
                        萝卜青菜
                    </div>
                    <div class="ani text-two" swiper-animate-effect="slideInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.2s">
                        各有所爱
                    </div>
                    <div class=" ani text-three" swiper-animate-effect="rotateIn" swiper-animate-duration="1s" swiper-animate-delay="2.2s">
                        近百种分类、上千个标签，小说榜单，一站式精彩呈现，不再为找书而头痛
                    </div>
                </div>
            </div>

        </div>
        <div class="swiper-slide full-three-box">

            <div class="ani zl-title-box" swiper-animate-effect="rotateOut" swiper-animate-duration="1s" swiper-animate-delay="2.5s">
                <div class="ani zl-title-one" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay=".2s">
                    那些年,
                </div>
                <div class=" ani zl-title-two" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.2s">
                    我们追过的武侠..
                </div>
            </div>


            <div class="zl-img-box">
                <div class="zl-img-box-colum">
                    <canvas class="ani zl-img" swiper-animate-effect="jackInTheBox" swiper-animate-duration=".5s" swiper-animate-delay="3.5s">
                    </canvas>
                    <canvas class="ani zl-img" swiper-animate-effect="jackInTheBox" swiper-animate-duration=".5s" swiper-animate-delay="4s">
                    </canvas>
                </div>
                <div class="zl-img-box-colum">

                    <canvas class="ani zl-img" swiper-animate-effect="jackInTheBox" swiper-animate-duration=".5s" swiper-animate-delay="4.5s">
                    </canvas>
                    <canvas class="ani zl-img" swiper-animate-effect="jackInTheBox" swiper-animate-duration=".5s" swiper-animate-delay="5s">
                    </canvas>
                    <canvas class="ani zl-img" swiper-animate-effect="jackInTheBox" swiper-animate-duration=".5s" swiper-animate-delay="5.5s">
                    </canvas>
                </div>

                <div class="zl-img-box-colum">
                    <canvas class="ani zl-img" swiper-animate-effect="jackInTheBox" swiper-animate-duration=".5s" swiper-animate-delay="6s">
                    </canvas>
                    <canvas class="ani zl-img" swiper-animate-effect="jackInTheBox" swiper-animate-duration=".5s" swiper-animate-delay="6.5s">
                    </canvas>

                </div>

            </div>
            <div class="zl-text-box">
                <div class="zl-text-vertical">
                    <div class="ani zl-text-vertical-one" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="7s">
                        飞雪连天射白鹿
                    </div>
                    <div class="ani zl-text-vertical-two" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="7s">
                        笑书神侠倚碧鸳
                    </div>
                </div>
                <div class="zl-text-horizontal">
                    <div class="ani zl-text-horizontal-one" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="8s">
                        江湖气短 儿女情长
                    </div>
                    <div class="ani zl-text-horizontal-two" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="8s">
                        百转千回 再入江湖
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-slide full-four-box">
            <div class=" ani jump-home" swiper-animate-effect="fadeIn" swiper-animate-duration=".5s" swiper-animate-delay=".5s">
                <span>完美体验</span>
                <button class="animated pulse infinite">一触即发</button>
            </div>

        </div>

    </div>
</div>`

var imgSrcList = ['/public/images/金庸/鹿.png', '/public/images/金庸/雪.png',
    '/public/images/金庸/连.png', '/public/images/金庸/素.png',
    '/public/images/金庸/碧.png', '/public/images/金庸/越.png',
    '/public/images/金庸/侠.png']

class Guide extends React.Component {
    constructor(props) {
        super(props)
    }

   componentDidMount() {
        var homeEle = this.refs['home'];
        homeEle.innerHTML = htmlStr;
        var canvasList = document.querySelectorAll('.zl-img');
        for (let i = 0; i < canvasList.length; i++) {
            let imgSrc = imgSrcList[i]
            let image = new Image();
            image.src = imgSrc;
            let canvas = canvasList[i];
            let context = canvas.getContext('2d');
            let w = canvas.clientWidth;
            let h = canvas.clientHeight;
            canvas.setAttribute('width', w);
            canvas.setAttribute('height', h);
            let hexagon_w = 0.5 * w;
            image.onload = function () {
                context.translate(hexagon_w * 0.5, 0);
                context.moveTo(0, 0);
                for (let j = 0; j < 6; j++) {
                    context.lineTo(hexagon_w, 0);
                    context.translate(hexagon_w * 1, 0);
                    context.rotate(Math.PI / 180 * 60);
                }
                context.clip();
                context.translate(-(hexagon_w * 0.5), 0);
                context.scale(1.1, 1.6);
                context.drawImage(image, 0, 0, w, w * image.height / image.width);
            }

        }
        var siwper = new Swiper('.fullPage', {
            direction: 'vertical',
            mousewheelControl: true,
            pagination: '.swiper-pagination',
            onInit: function (swiper) {
                swiperAnimateCache(swiper); //隐藏动画元素 
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function (swiper) {
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            }
        })
    }

    render() {
        return (
            <div ref='home'>
            </div>)
    }

}






export default Guide;
