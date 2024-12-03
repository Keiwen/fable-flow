import { createStore } from 'vuex'

export default createStore({
  state: {
    libraryHandle: null, // default null
    browseAuthor: '',
    browseBook: ''
  },
  getters: {
    getLibraryHandle: (state) => state.libraryHandle,
    getLibraryDirectory: (state) => state.libraryHandle ? state.libraryHandle.name : '',
    getBrowseAuthor: (state) => state.browseAuthor,
    getBrowseBook: (state) => state.browseBook
  },
  mutations: {
    setLibraryHandle (state, libraryHandle) {
      state.libraryHandle = libraryHandle
    },
    setBrowseAuthor (state, author) {
      state.browseAuthor = author
    },
    setBrowseBook (state, book) {
      state.browseBook = book
    }
  },
  actions: {
    updateLibraryHandle ({ commit }, libraryHandle) {
      commit('setBrowseBook', '')
      commit('setBrowseAuthor', '')
      commit('setLibraryHandle', libraryHandle)
    },
    updateBrowseAuthor ({ commit }, author) {
      commit('setBrowseBook', '')
      commit('setBrowseAuthor', author)
    },
    updateBrowseBook ({ commit }, book) {
      commit('setBrowseBook', book)
    }
  },
  modules: {
  }
})
