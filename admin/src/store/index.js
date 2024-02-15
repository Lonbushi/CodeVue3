import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
// 创建一个新的 store 实例
export default createStore({
  state: {
    isGetterRouter: false,
    isCollapsed: false,
    userInfo: {},
    productList:{}
  },
  mutations: {
    ChangeGetterRouter(state, value) {
      state.isGetterRouter = value
    },
    // 控制侧边栏的
    changeCollapsed(state) {
      state.isCollapsed = !state.isCollapsed
    },
    changeUserInfo(state, value) {
      state.userInfo = {
        ...state.userInfo,
        ...value
      }
    },
    clearUserInfo(state, value) {
      state.userInfo = {}
    },
  },
  plugins: [createPersistedState({
    paths: ['isCollapsed', 'userInfo']//控制是否持久化
  })],
})





