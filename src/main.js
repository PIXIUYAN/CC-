

 

import React from 'react'
import ReactDom from 'react-dom'
//资源
import './public/css/reset.css'
import './public/css/animate.css'
import "./public/css/swiper.min.css"
// 组件
import Guide from './view/Guide/Guide.jsx'

import Home from './view/Home/home.jsx'

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return (
            <div>
            <Home/>  
              <Guide/>  
              
            </div>
        )
    }
}

var root =document.getElementById('root')
ReactDom.render(<App/>,root);