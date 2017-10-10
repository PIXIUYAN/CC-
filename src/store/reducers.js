import {
    UPDATE_BOOK_LIST,
    SWITCH_BOOK_LIST,
    GET_BOOK_DETAIL,
    HANDLE_LOADBOOKLIST,
    FETCH_BOOKDETAIL_SUCCESS,
    FETCH_CHAPTERLIST_SUCCESS,
    FETCH_CHAPTERCONTENT_SUCCESS,
    CLEAR_CHAPTERCONTENT,
    LOAD_CHAPTERCONTENT
} from './actions'

function bookList(bookList = [], action) {

    switch (action.type) {
        case UPDATE_BOOK_LIST:
            return [
                ...bookList,
                ...action.preload.books
            ]
        case SWITCH_BOOK_LIST:
            return [...action.preload.books]
            return
        default:
            return bookList
    }

}

function chapterList(chapterList = {}, action) {
    switch (action.type) {
        case FETCH_CHAPTERLIST_SUCCESS:

            return {
                ...action.preload
            }
        default:
            return chapterList

    }
}

function chapterContents(chapterContents = [], action) {
    switch (action.type) {
        case LOAD_CHAPTERCONTENT:
            return [
                ...chapterContents,
                action.preload
            ];
        case FETCH_CHAPTERCONTENT_SUCCESS:
            return [action.preload];
        case CLEAR_CHAPTERCONTENT:
            console.log('没有了');
            return action.preload;
        default:
            return chapterContents
    }
}

function loadBookList(loadBookList = null, action) {
    switch (action.type) {
        case HANDLE_LOADBOOKLIST:
            return action.preload;
        default:
            return loadBookList;
    }

}

function bookDetail(bookDetail = {}, action) {
    switch (action.type) {
        case FETCH_BOOKDETAIL_SUCCESS:
            console.log('action', action);
            return {
                ...action.preload
            }

        default:
            return bookDetail
    }

}

export default {
    bookList,
    bookDetail,
    loadBookList,
    chapterList,
    chapterContents
}