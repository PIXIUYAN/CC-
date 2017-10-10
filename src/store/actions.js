// export const UPDATE_BOOK_LIST = 'updateBookList'

// export const SWITCH_BOOK_LIST = 'updateBookList'

// export const GET_BOOK_DETAIL = 'getBookDetail'

// export const HANDLE_LOADBOOKLIST = 'handleLoadBookList'
// // 书籍列表
// function loadBookList(handleCallback) {
//     return {type: HANDLE_LOADBOOKLIST, preload: handleCallback}
// }

// function switchBookList(list) {
//     return {type: SWITCH_BOOK_LIST, preload: list}
// }

// function updateBookList(list) {
//     return {type: UPDATE_BOOK_LIST, preload: list}
// }

// export function fetchBookList(query) {
//     return function (dispatch) {
//         var startIndex = 0
//         var url = `/api/book/fuzzy-search?query=${query}&&start=${startIndex}&&limit=10`;
//         fetch(url)
//             .then(respone => respone.json())
//             .then(data => {
//                 dispatch(switchBookList(data));
//                 dispatch(loadBookList(function () {
//                     startIndex += 10;
//                     var loadUrl = `/api/book/fuzzy-search?query=${query}&&start=${startIndex}&&limit=10`;
//                     fetch(loadUrl)
//                         .then(response => response.json())
//                         .then(data => {
//                             dispatch(updateBookList(data))
//                         })
//                 }))
//             })

//     }
// }
// // 章节内容和章节列表,书源信息.
// export const FETCH_CHAPTERLIST_SUCCESS = 'fetchChapterListSuccess'
// export const FETCH_CHAPTERCONTENT_SUCCESS = 'fetchChapterContentSuccess'
// export const FETCH_BOOKSOURCE_SUCCESS = 'fetchBookSourceSuccess'

// function fetchChapterList(chapterListID) {
//     return (dispatch) => {
//         var url = '/api/toc/' + chapterListID + '?view=chapters'
//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 var chapterList = data['chapters']
//                 var chapterLink = chapterList[0]['link']
//                 dispatch({type: FETCH_CHAPTERLIST_SUCCESS, preload: chapterList})
//                 dispatch(fetchChapterContent(encodeURIComponent(chapterLink)))
//             })
//     }

// }

// export const LOAD_CHAPTERCONTENT = 'loadChaperContent'

// export function loadCharpterContent(data) {
//     return {type: LOAD_CHAPTERCONTENT, preload: data}

// }

// export const CLEAR_CHAPTERCONTENT = 'clearChapterContent'
// export function clearChapterContent() {
//     return {type: CLEAR_CHAPTERCONTENT, preload: []}
// }

// function fetchChapterContentSuccess(chapterContent) {
//     return {type: FETCH_CHAPTERCONTENT_SUCCESS, preload: chapterContent}
// }

// export function fetchChapterContent(chapterLink) {
//     return (dispatch) => {
//         var url = '/api2/chapter/' + chapterLink + '?k=2124b73d7e2e1945&t=1468223717'
//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 dispatch(fetchChapterContentSuccess(data['chapter']))
//             })
//     }
// }

// function fetchBookSourceSuccess(chapterList) {
//     return {type: FETCH_BOOKSOURCE_SUCCESS, preload: chapterList}
// }

// export function fetchBookSource(sourceId) {

//     return (dispatch) => {
//         var url = '/api/toc?view=summary&book=' + sourceId
//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 var chapterLink = data[0]['_id']
//                 dispatch(fetchChapterList(chapterLink))
//                 dispatch(fetchBookSourceSuccess(data))
//             })
//     }

// }

// // 书籍详情
// export const FETCH_BOOKDETAIL_SUCCESS = 'fetchBookDetailSuccess';
// function fetchBookDetailSuccess(data) {
//     return {type: FETCH_BOOKDETAIL_SUCCESS, preload: data}
// }

// export function fetchBookDetail(bookid) {
//     return function (dispatch) {
//         var url = '/api/book/' + bookid
//         console.log(1)
//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 dispatch(fetchBookDetailSuccess(data))
//             })
//     }
// }

// // export function fetchBookList(isFirstTime, key, startIndex = 0) {     var url
// // = `/api/book/fuzzy-search?query=${key}&&start=${startIndex}&&limit=10`;
// // return function (dispatch) {         fetch(url)             .then(respone =>
// // respone.json())             .then(data => {                 switch (loadType)
// // {                     case true: dispatch(switchBookList(data)); break; case
// // false: dispatch(updateBookList(data));       break; default: return;     } })
// // .catch(err => { console.log('网络不好') })    } }