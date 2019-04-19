export default {
    namespace:'Title',
    state:{
        title:'电影'
    },
    reducers:{
        wanxiang(state,{payload}){
            return {...state,...payload}
        },
        fanhua(state,{payload}){
            return {...state,...payload}
        },
        yueguang(state,{payload}){
            return {...state,...payload}
        },
        jingsi(state,{payload}){
            return {...state,...payload}
        }
    }
}