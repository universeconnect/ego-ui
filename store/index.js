import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        //状态
        isLogin: null,//是否已经登录
        scrolltop:0,//滚动条
    },
    mutations:{
        //修改状态
        updataIsLogin(state,data) {
            state.isLogin =  data;
        },
        updatascrollTop(state, scrolltop){
            state.scrolltop = scrolltop;

        }
    },
    actions:{
        //操作
    },
    getters:{
        //数据处理
    },
    modules:{

    }
});
//导出store
export default store
