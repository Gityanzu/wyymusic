import axios from '../utils/request.js'

const base = {
    baseUrl: 'http://iwenwiki.com:3000',
    login: '/login/cellphone', //登录接口
    recommend: '/recommend/resource', //推荐歌单
    songs: '/personalized/newsong', //推荐歌曲
    recommendMusic: '/playlist/detail', //歌单歌曲详情
    category: '/dj/recommend/type', //电台分类
    songUrl: '/song/url', //获取音乐
    lyric: '/lyric', //歌词
    search: '/search', //搜索
    hot: '/search/hot/detail', //热搜列表
}

const api = {
    //登录
    login(phone, password) {
        return axios.get(base.baseUrl + base.login + '?phone=' + phone + '&password=' + password)
    },
    //每日推荐歌单
    getRecommend() {
        return axios.get(base.baseUrl + base.recommend)
    },
    //每日推荐歌曲
    getSongs() {
        return axios.get(base.baseUrl + base.songs)
    },
    //歌单歌曲详情
    getRecommendMusic(id) {
        return axios.get(base.baseUrl + base.recommendMusic + '?id=' + id)
    },
    //电台分类
    getCategory(type) {
        return axios.get(base.baseUrl + base.category + '?type=' + type)
    },
    //获取音乐
    getSongUrl(id) {
        return axios.get(base.baseUrl + base.songUrl + '?id=' + id)
    },
    //歌词
    getLyric(id) {
        return axios.get(base.baseUrl + base.lyric + '?id=' + id)
    },
    //搜索
    getSearch(keywords) {
        return axios.get(base.baseUrl + base.search + '?keywords=' + keywords)
    },
    //热搜列表
    getHot() {
        return axios.get(base.baseUrl + base.hot)
    },
}

export default api