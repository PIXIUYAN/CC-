import React from 'react'
const path = require('path');
import './home.scss'
import BarItem from '../../component/barItem'

function ChannelSvg(name) {
    this.name = name;
    this.path = path.resolve('../../public/images/bookClassify/', name + '.svg');
}

var manSvgList = [];
manSvgList.push(new ChannelSvg('穿越'))
manSvgList.push(new ChannelSvg('仙侠'))
manSvgList.push(new ChannelSvg('玄幻'))
manSvgList.push(new ChannelSvg('古言'))
manSvgList.push(new ChannelSvg('悬疑'))
manSvgList.push(new ChannelSvg('青春'))
manSvgList.push(new ChannelSvg('现言'))
manSvgList.push(new ChannelSvg('网游'))

var ManSvg1 = require('../../public/images/bookClassify/带我穿越.svg')
var ManSvg2 = require('../../public/images/bookClassify/仙侠.svg')
var ManSvg3 = require('../../public/images/bookClassify/玄幻.svg')
var ManSvg4 = require('../../public/images/bookClassify/古代言情.svg')
var ManSvg5 = require('../../public/images/bookClassify/灵异.svg')
var ManSvg6 = require('../../public/images/bookClassify/浪漫青春.svg')
var ManSvg7 = require('../../public/images/bookClassify/玄幻言情.svg')
var ManSvg8 = require('../../public/images/bookClassify/游戏.svg')

export default function () {
    return (
        <div className='girl-channel-classification boy'>
            <div className='type'>
                <div className="circle">

                    <BarItem svg={< ManSvg1 />} label='穿越'/>

                </div>

            </div>
            <div className='type'>
                <div className="circle">
                    <BarItem svg={< ManSvg2 />} label='仙侠'/>
                </div>

            </div>
            <div className='type'>
                <div className="circle">

                    <BarItem svg={< ManSvg3 />} label='玄幻'/>

                </div>
            </div>
            <div className='type'>
                <div className="circle">

                    <BarItem svg={< ManSvg4 />} label='古言'/>

                </div>
            </div>
            <div className='type'>
                <div className="circle">

                    <BarItem svg={< ManSvg5 />} label='灵异'/>

                </div>
            </div>
            <div className='type'>
                <div className="circle">

                    <BarItem svg={< ManSvg6 />} label='青春'/>

                </div>
            </div>
            <div className='type'>
                <div className="circle">

                    <BarItem svg={< ManSvg7 />} label='现言'/>

                </div>
            </div>
            <div className='type'>
                <div className="circle">

                    <BarItem svg={< ManSvg8 />} label='游戏'/>

                </div>
            </div>
            <div className='sex-label'></div>
        </div>
    )
}