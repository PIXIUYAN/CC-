
import React from 'react'
const path = require('path');
import './home.scss'



function ChannelSvg(name) {
    this.name = name;
    this.path = path.resolve('../../public/images/bookClassify/', name + '.svg');
}

var manSvgList = [];
manSvgList.push(new ChannelSvg('仙侠'))
manSvgList.push(new ChannelSvg('玄幻'))
manSvgList.push(new ChannelSvg('奇幻'))
manSvgList.push(new ChannelSvg('武侠'))
manSvgList.push(new ChannelSvg('灵异'))
manSvgList.push(new ChannelSvg('历史'))
manSvgList.push(new ChannelSvg('军事'))
manSvgList.push(new ChannelSvg('科幻'))


var ManSvg1 = require('../../public/images/bookClassify/仙侠.svg')
var ManSvg2 = require('../../public/images/bookClassify/玄幻.svg')
var ManSvg3 = require('../../public/images/bookClassify/奇幻.svg')
var ManSvg4 = require('../../public/images/bookClassify/武侠.svg')
var ManSvg5 = require('../../public/images/bookClassify/灵异.svg')
var ManSvg6 = require('../../public/images/bookClassify/历史.svg')
var ManSvg7 = require('../../public/images/bookClassify/军事.svg')
var ManSvg8 = require('../../public/images/bookClassify/科幻.svg')
 

export default function () {
    return (
        <div className='boy-channel-classification boy'>
            <div className='type'>
                <div className="circle">
                <ManSvg1/>   
                </div>
                <h3>
                    仙侠
                </h3>
                 
            </div>
            <div className='type'>
                <div className="circle">
                <ManSvg2/>   
                </div>
                <h3>
                    玄幻
                </h3>
            </div>
            <div className='type'>
            <div className="circle">
                <ManSvg3/>   
                </div>
                <h3>
                    奇幻
                </h3>
            </div>
            <div className='type'>
            <div className="circle">
                <ManSvg4/>   
                </div>
                <h3>
                    武侠
                </h3>
            </div>
            <div className='type'>
            <div className="circle">
                <ManSvg5/>   
                </div>
                <h3>
                    灵异
                </h3>
            </div>
            <div className='type'>
            <div className="circle">
                <ManSvg6/>   
                </div>
                <h3>
                    历史
                </h3>
            </div>
            <div className='type'>
            <div className="circle">
                <ManSvg7/>   
                </div>
                <h3>
                    军事
                </h3>
            </div>
            <div className='type'>
            <div className="circle">
                <ManSvg8/>   
                </div> 
                <h3>
                    仙侠
                </h3>
            </div>
        </div>
    )
}