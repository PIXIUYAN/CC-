/**
 *  章节列表
 * url: api.zhuishushenqi.com/toc/书源ID?view=chapters
    method: GET
    params:
    view chapters

 */
function fetchChaperList(sourceId) {
    var url = `/api/toc/${sourceId}?view=chapters`

    return fetch(url).then(response => response.json())

}

/**
 * 章节内容
 * url: chapter2.zhuishushenqi.com/chapter/章节link(从章节列表中获得)?k=2124b73d7e2e1945&t=1468223717
    method: GET
    params:
    k: 2124b73d7e2e1945
    t: 1468223717
 */

function fetchChaperContent(chapterLink) {

    chapterLink = encodeURIComponent(chapterLink)
    var url = `/api2/chapter/${chapterLink}?k=2124b73d7e2e1945&t=1468223717`
    
    return fetch(url).then(response => response.json())

}

/**
 *  书源信息
 *   url: api.zhuishushenqi.com/toc
        method: GET
        params:
        view: summary
        book: 书籍id
 */
function fetchBookSource(bookId) {
    var url = `/api/atoc?book=${bookId}&&view=summary`

    return fetch(url).then(response => response.json())

}
/**
 * 书籍详情
 * url: api.zhuishushenqi.com/book/书籍id(_id)
    method: GET
    params:
    无
 */

function fetchBookInfo(bookId) {
    var url = `/api/book/${bookId}`

    return fetch(url).then(response => response.json())

}

/**
 *  书籍搜索
 * url: api.zhuishushenqi.com/book/fuzzy-search
    method: GET
    params:
    query:关键词
    start:结果开始位置
    limit:结果最大数量
 */

function fetchBookList(query, startIndex = 0) {
    var url = `/api/book/fuzzy-search?query=${query}&&start=${startIndex}&&limit=20`

    return fetch(url).then(response => response.json())

}
/**
 *  根据分类获取小说列表
 * url: api.zhuishushenqi.com/book/by-categories

    gender: 男生:mael 女生:female 出版:press

    type: 热门:hot 新书:new 好评:repulation 完结: over 包月: month

    major: 大类别 从接口1获取

    minor: 小类别 从接口4获取 (非必填)

    start: 分页开始页

    limit: 分页条数

    https://api.zhuishushenqi.com/book/by-categories?gender=male&type=hot&major=奇幻&start=0&limit=20

 */

function fetchListAtMajor(major) {
    var url = `/api/book/by-categories?gender=male&type=hot&major=${major}&start=0&limit=20`
    return fetch(url).then(response => response.json())

}
/**
 * 接口	http://api.zhuishushenqi.com/book/search-hotwords
 *
 * 参数	null
 */

function fetchHotWords() {
    var url = `/api/book/search-hotwords`
    return fetch(url).then(response => response.json())
}

export default {
    fetchChaperList,
    fetchChaperContent,
    fetchBookInfo,
    fetchBookSource,
    fetchBookList,
    fetchListAtMajor,
    fetchHotWords
}