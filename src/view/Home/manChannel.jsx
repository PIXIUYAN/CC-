import React from 'react'
const path = require('path');
import {Link} from 'react-router-dom'
import BarItem from '../../component/barItem'
import './home.scss'

function ChannelSvg(name) {
    this.name = name;
    this.path = path.resolve('../../public/images/bookClassify/', name + '.svg');
}

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
                <Link to='/booklist?major=仙侠'>
                    <div className="circle">
                        <BarItem svg={< ManSvg1 />} label='仙侠'/>
                    </div>
                </Link>

            </div>
            <div className='type'>

                <Link to='/booklist?major=玄幻'>
                    <div className="circle">
                        <BarItem svg={< ManSvg2 />} label='玄幻'/>
                    </div>
                </Link>

            </div>
            <div className='type'>
                <Link to='/booklist?major=玄幻'>
                    <div className="circle">
                        <BarItem svg={< ManSvg3 />} label='奇幻'/>
                    </div>
                </Link>

            </div>
            <div className='type'>
                <Link to='/booklist?major=武侠'>
                    <div className="circle">
                        <BarItem svg={< ManSvg4 />} label='武侠'/>
                    </div>
                </Link>

            </div>
            <div className='type'>
                <Link to='/booklist?major=灵异'>
                    <div className="circle">
                        <BarItem svg={< ManSvg5 />} label='灵异'/>
                    </div>
                </Link>

            </div>
            <div className='type'>
                <Link to='/booklist?major=历史'>
                    <div className="circle">
                        <BarItem svg={< ManSvg6 />} label='历史'/>
                    </div>
                </Link>

            </div>
            <div className='type'>
                <Link to='/booklist?major=军事'>
                    <div className="circle">
                        <BarItem svg={< ManSvg7 />} label='军事'/>
                    </div>
                </Link>

            </div>
            <div className='type'>
                <Link to='/booklist?major=科幻'>
                    <div className="circle">
                        <BarItem svg={< ManSvg8 />} label='科幻'/>
                    </div>
                </Link>

            </div>

        </div>
    )
}