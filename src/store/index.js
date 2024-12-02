import { createStore } from 'vuex'

export default createStore({
  state: {
    libraryHandle: null, // default null
    authorHandle: null
  },
  getters: {
    getLibraryHandle: (state) => state.libraryHandle,
    getLibraryDirectory: (state) => state.libraryHandle ? state.libraryHandle.name : '',
    getAuthorHandle: (state) => state.authorHandle,
    getAuthorName: (state) => state.authorHandle ? state.authorHandle : ''
  },
  mutations: {
    setLibraryHandle (state, libraryHandle) {
      state.libraryHandle = libraryHandle
    },
    setAuthorHandle (state, authorHandle) {
      state.authorHandle = authorHandle
    }
  },
  actions: {
    updateLibraryHandle ({ commit }, libraryHandle) {
      commit('setLibraryHandle', libraryHandle)
    },
    updateAuthorHandle ({ commit }, authorHandle) {
      commit('setAuthorHandle', authorHandle)
    }
  },
  modules: {
  }
})
