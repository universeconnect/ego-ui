import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    //状态
    a:100000000
  },
  mutations:{
    //修改状态
    increment(state){
      state.a++
    },
    decrement(state){
      state.a++
    }
  },
  actions:{
    //操作
  },
  getters:{
    //数据处理
    data1(state){
      return state.a*5
    },
    data2(state){
      return function (x) {
        return state.a*x
      }
    },
    data3(state,getters){
      return getters.data1*5
    }
  },
  modules:{

  }
});
//导出store
export default store
