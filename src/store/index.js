import { createStore } from 'vuex'

export default createStore({
  state: {
    libraryHandle: null, // default null
    authorHandle: null,
    bookHandle: null
  },
  getters: {
    getLibraryHandle: (state) => state.libraryHandle,
    getLibraryDirectory: (state) => state.libraryHandle ? state.libraryHandle.name : '',
    getAuthorHandle: (state) => state.authorHandle,
    getAuthorName: (state) => state.authorHandle ? state.authorHandle.name : '',
    getBookHandle: (state) => state.bookHandle,
    getBookName: (state) => state.bookHandle ? state.bookHandle.name : ''
  },
  mutations: {
    setLibraryHandle (state, libraryHandle) {
      state.libraryHandle = libraryHandle
    },
    setAuthorHandle (state, authorHandle) {
      state.authorHandle = authorHandle
    },
    setBookHandle (state, bookHandle) {
      state.bookHandle = bookHandle
    }
  },
  actions: {
    updateLibraryHandle ({ commit }, libraryHandle) {
      commit('setBookHandle', null)
      commit('setAuthorHandle', null)
      commit('setLibraryHandle', libraryHandle)
    },
    updateAuthorHandle ({ commit }, authorHandle) {
      commit('setBookHandle', null)
      commit('setAuthorHandle', authorHandle)
    },
    updateBookHandle ({ commit }, bookHandle) {
      commit('setBookHandle', bookHandle)
    }
  },
  modules: {
  }
})
