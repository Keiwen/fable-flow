import { createStore } from 'vuex'

export default createStore({
  state: {
    libraryHandle: null, // default null
    currentAuthor: '',
    currentBook: ''
  },
  getters: {
    getLibraryHandle: (state) => state.libraryHandle,
    getLibraryDirectory: (state) => state.libraryHandle ? state.libraryHandle.name : '',
    getCurrentAuthor: (state) => state.currentAuthor,
    getCurrentBook: (state) => state.currentBook
  },
  mutations: {
    setLibraryHandle (state, libraryHandle) {
      state.libraryHandle = libraryHandle
    },
    setCurrentAuthor (state, author) {
      state.currentAuthor = author
    },
    setCurrentBook (state, book) {
      state.currentBook = book
    }
  },
  actions: {
    updateLibraryHandle ({ commit }, libraryHandle) {
      commit('setCurrentBook', '')
      commit('setCurrentAuthor', '')
      commit('setLibraryHandle', libraryHandle)
    },
    updateCurrentAuthor ({ commit }, author) {
      commit('setCurrentBook', '')
      commit('setCurrentAuthor', author)
    },
    updateCurrentBook ({ commit }, book) {
      commit('setCurrentBook', book)
    }
  },
  modules: {
  }
})
