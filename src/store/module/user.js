const state = {
  name: "default name"
}

const mutations = {
  setName(state,obj){
    state.name = obj;
  }
}

const actions = {
  //
}

export default {
  namespaced: true,//* 启用命名空间
  state,
  mutations,
  actions
}
