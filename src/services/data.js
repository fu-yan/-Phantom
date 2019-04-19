import { getCors } from './request'

export function getData(params) {
    return getCors("/",params)
}
//获取电影列表
export function getMovie(params){
    return getCors("/",{url:'https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290'})
}
//获取电影详情
export function getMovieDetail(params){
    return getCors("/",{url:`https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=${params}`})
}
//获取(图虫)
export function getCinecism(params){
    return getCors("/",{url:`https://api.tuchong.com/feed-app?page=1&type=refresh`})
}

//获取演讲视频(开眼)
export function getSpeech(params){
    return getCors("/",{url:`http://baobab.kaiyanapp.com/api/v4/tabs/selected`})
}

//获取阅读数据（每日一文）
export function getRead(params){
    return getCors("/",{url:`https://interface.meiriyiwen.com/article/today?dev=1`})
}
//获取指定日期文章
export function getReadList(params){
    return getCors("/",{url:`https://interface.meiriyiwen.com/article/day?dev=1&date=${params}`})
}
