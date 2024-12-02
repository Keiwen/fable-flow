import { createStore } from 'vuex'

export default createStore({
  state: {
    libraryHandle: null // default null
  },
  getters: {
    hasLibraryDefined: (state) => state.libraryHandle !== null,
    getLibraryHandle: (state) => state.libraryHandle,
    getLibraryDirectory: (state) => state.libraryHandle ? state.libraryHandle.name : ''
  },
  mutations: {
    setLibraryHandle (state, libraryHandle) {
      state.libraryHandle = libraryHandle
    }
  },
  actions: {
    updateLibraryHandle ({ commit }, libraryHandle) {
      commit('setLibraryHandle', libraryHandle)
    }
  },
  modules: {
  }
})
