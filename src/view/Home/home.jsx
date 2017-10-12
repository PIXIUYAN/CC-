import React from 'react'
import ManChannel from './manChannel.js'

import {NavLink, Route} from 'react-router-dom'

import Banner from './banner.js'
import Search from '../../public/images/search.svg'
import HotTop from './hotTop.js'
import API from '../../api/api.js'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.init()
    }
    init() {

        var a = []

        this.state = ({bookList: []})

        fetch('/api/ranking/54d42d92321052167dfb75e3?start=0&&limit=30')
            .then(response => response.json())
            .then(data => {

                var books = data['ranking']['books'].slice(0, 30)
                books[2] = data['ranking']['books'][31]
                console.log('data', books)
                this.setState({bookList: books})
            })
    }
    componentDidMount() {
        var swiper = new Swiper('.home-banner', {
            autoplay: 2000,
            loop: true,
            pagination: '.swiper-pagination'
        })

    }
    render() {
        return (
            <div style={{
                paddingBottom: "15vw"
            }}>
                <Banner/>
                <ManChannel/>
                <HotTop books={this.state.bookList}/>
            </div>
        )
    }

}

export default Home;