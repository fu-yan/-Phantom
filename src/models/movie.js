export default {
    namespace:'Movie',
    state:{
        reying:{},
        zuixin:{},
        cinecism:{},
        yueguang:{},
        read:{},
        readList:[]
    },
    reducers:{
        Reying(state,{payload}){
            return {...state,...payload}
        },
        Zuixin(state,{payload}){
            return {...state,...payload}
        },
        Cinecism(state,{payload}){
            return {...state,...payload}
        },
        Yueguang(state,{payload}){
            return {...state,...payload}
        },
        Read(state,{payload}){
            return {...state,...payload}
        },
        ReadList(state,{payload}){
            return {...state,...payload}
        }
    }
}