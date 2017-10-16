import React from 'react'
import './search.scss'
import SearchBar from './searchBar.js';
import HotSearch from './hotSearch.js'
import RecentlySearch from './recently.js'
import API from '../../api/api.js'

const store = require('store')

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hotWords: null,
            historySearch: null
        }

        this.handleSubmit = this
            .handleSubmit
            .bind(this)

        this.handleClear = this
            .handleClear
            .bind(this)

    }

    componentWillMount() {
        API
            .fetchHotWords()
            .then(data => {

                this.setState({
                    hotWords: data
                        .searchHotWords
                        .slice(40, 50)
                })

            })
    }

    handleClear() {
        store.remove('history-search')
        this.setState({historySearch: null})

    }

    handleSubmit(e) {
        console.log(this.props)
        var {history} = this.props;

        e.preventDefault();

        var query = e.target.input.value;

        var historySearch = store.get('history-search');

        // 不重复添加历史搜索记录
        historySearch = historySearch
            ? (historySearch.includes(query)
                ? historySearch
                : [
                    ...historySearch,
                    query
                ])
            : [query]

        store.set('history-search', historySearch)
        this.setState({historySearch: historySearch})
        history.push(`/booklist?query=${query}`, {showIndex: 2})

    }

    render() {
        return <div className="search-page">
            <SearchBar handleSubmit={this.handleSubmit}/> {/* 热词搜索 */}
            <HotSearch hotWords={this.state.hotWords}/> {/* 历史记录 */}
            <RecentlySearch
                historySearch={store.get('history-search')}
                handleClear={this.handleClear}/>
        </div>
    }
}
export default Search;